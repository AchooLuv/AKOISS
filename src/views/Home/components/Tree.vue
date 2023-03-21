<script setup lang="ts">
import { ref } from 'vue';
import { useTreeStore } from '@/stores/tree'
import { useSearchStore } from '@/stores/search'
import type { TreeNodeData } from 'element-plus/es/components/tree/src/tree.type';

interface Tree {
  id: string
  label: string
  children?: Tree[]
}
// store
const treeStore = useTreeStore()
const searchStore = useSearchStore()
// ref
const isDisabled = ref(true)
const treeRef = ref()
const data: Tree[] = [
  {
    id: 'iqdb',
    label: 'IQDB',
    children: [
      {
        id: 'iqdb-1',
        label: '搜索时除去颜色',
      }
    ]
  },
  {
    id: 'ascii2d',
    label: 'ASCII2D',
    children: [
      {
        id: 'ascii2d-1',
        label: '按色彩检索',
      }, {
        id: 'ascii2d-2',
        label: '按特征检索',
      }
    ]
  },
  {
    id: 'ehentai',
    label: 'EHENTAI',
    children: [
      {
        id: 'ehentai-1',
        label: '搜索相似内容',
      }, {
        id: 'ehentai-2',
        label: '搜索封面',
      }, {
        id: 'ehentai-3',
        label: '搜索已删除的内容',
      },
    ]
  },
  {
    id: 'saucenao',
    label: 'SAUCENAO',
    children: [
      {
        id: 'saucenao-1',
        label: '隐藏敏感内容',
      }
    ]
  },
  {
    id: 'tracemoe',
    label: 'TRACEMOE',
    children: [
      {
        id: 'tracemoe-1',
        label: '裁剪图片边缘',
      }
    ]
  }
]
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
    // console.log(parent, id, keys)
    treeRef.value.setCheckedKeys(keys)
  }
  // 数据处理
  isDisabled.value = !keys.length || !searchStore.imgRaw
}
</script>

<template>
  <el-divider content-position="left">选择搜索引擎：</el-divider>
  <el-tree ref="treeRef" :data="data" show-checkbox node-key="id" check-strictly check-on-click-node highlight-current
    accordion @check="handleChecked" />
  <el-button class="query-button" size="small" color="#626aef" :disabled="isDisabled">搜索<el-icon>
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