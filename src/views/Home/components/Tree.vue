<script setup lang="ts">
import { ref } from 'vue'
import { treeData } from '@/const/treeData'
import { useSearchStore } from '@/stores/search'
import type { Tree } from '@/const/treeData'
import type { TreeNodeData } from 'element-plus/es/components/tree/src/tree.type'

// store
const searchStore = useSearchStore()
// ref
const isDisabled = ref(true)
const treeRef = ref()

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
  isDisabled.value = !keys.length || !searchStore.imgRaw
}
const handleSearch = () => {
  // 转blob
  const image = new Blob([searchStore.imgRaw as BlobPart], { type: searchStore.imgType })

  const res = searchStore.searchAction('/', { image }, { headers: { 'Content-Type': 'multipart/form-data' } })
}
</script>

<template>
  <el-divider content-position="left">选择搜索引擎：</el-divider>
  <el-tree ref="treeRef" :data="treeData" show-checkbox node-key="id" check-strictly check-on-click-node highlight-current
    accordion :default-expanded-keys="['tracemoe']" @check="handleChecked" />
  <el-button class="query-button" size="small" color="#626aef" :disabled="isDisabled"
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
  right: 50%;
  bottom: 0;
  letter-spacing: 3px;
}
</style>