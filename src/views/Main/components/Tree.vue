<script setup lang="ts">
import { ref } from 'vue'
import { treeData } from '@/data/common'
import { tipsType } from '@/data/format'
import { useResultStore } from '@/stores/result'
import { useSearchStore } from '@/stores/search'
import type { Tree, ResultType } from '@/types/common'
import type { TreeNodeData } from 'element-plus/es/components/tree/src/tree.type'

// store
const searchStore = useSearchStore()
const resultStore = useResultStore()
// ref
const isDisabled = ref(true)
const treeRef = ref()
let paramsArr = [] as string[]

// methods
const handleChecked = (node: Tree, checked: TreeNodeData) => {
  // 一级菜单单选，二级多选
  const id = node.id
  const isParent = !!node.children
  let keys = checked.checkedKeys
  const isChecked = keys.includes(id)
  if (isParent && isChecked) {
    treeRef.value.setCheckedKeys([id])
  } else if (isParent && !isChecked) {
    treeRef.value.setCheckedKeys(keys = [])
  } else if (!isParent && isChecked) {
    const parent = id.split('-')[0]
    if (!keys.includes(parent)) keys.unshift(parent)
    const isNew = keys.every((str: string) => str.includes(parent))
    if (!isNew) keys = [parent, id]
    treeRef.value.setCheckedKeys(keys)
  }
  // 数据处理
  if (keys.length > 1) paramsArr = keys.slice(1).map((v: string) => v.split('-')[1])
  isDisabled.value = !keys.length || !searchStore.imgRaw
}

const handleSearch = async () => {
  resultStore.isLoading = true
  const res = await searchStore.searchAction('/search', { image: searchStore.imgRaw }, {
    params: { anilistInfo: true, cutBorders: paramsArr.includes('cutBorders') },
    headers: { 'Content-Type': 'multipart/form-data' }
  })
  if (res.status === 200) {
    const data = res.data.result.filter((v: ResultType) => {
      if (v.similarity > 0.8) {
        v.aniname = v.anilist?.title.native as string
        return v.similarity > 0.8
      }
    })
    resultStore.updateResultState(data)
    tipsType(true, '搜索成功')
  } else {
    tipsType(false, '搜索失败')
  }
  resultStore.isLoading = false
}
</script>

<template>
  <el-divider content-position="left">选择搜索引擎：</el-divider>
  <el-tree ref="treeRef" :data="treeData" show-checkbox node-key="id" check-strictly check-on-click-node highlight-current
    accordion :default-expanded-keys="['tracemoe']" @check="handleChecked" />
  <el-button class="query-button" size="small" color="#3a0ca3" :disabled="isDisabled"
    @click.stop="handleSearch">搜索<el-icon>
      <PictureFilled />
    </el-icon></el-button>
</template>

<style lang="scss">
.el-divider {
  margin-top: 6px;
}

.el-tree-node {
  >.el-tree-node__children {
    display: flex;
    flex-direction: row;
  }

  >.el-tree-node__children>div {
    width: 25%;
  }
}

.el-tree-node.is-expanded {
  >.el-tree-node__content {
    color: #626aef;
  }

  >.el-tree-node__children {
    display: flex;
    flex-direction: row;
  }

  >.el-tree-node__children>div {
    width: 25%;
  }
}

.query-button {
  position: absolute;
  left: 50%;
  bottom: 5px;
  letter-spacing: 3px;
  transform: translateX(-50%);
}
</style>