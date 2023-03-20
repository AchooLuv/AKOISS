<script setup lang="ts">
import type Node from 'element-plus/es/components/tree/src/model/node'
import type { TreeNodeData } from 'element-plus/es/components/tree/src/tree.type';
import { ref } from 'vue';

interface Tree {
  id: number
  label: string
  isPenultimate?: boolean
  children?: Tree[]
}

const isDisabled = ref(true)


const data: Tree[] = [
  {
    id: 1,
    label: 'IQDB',
    children: [
      {
        id: 11,
        label: '搜索时除去颜色',
      }
    ]
  },
  {
    id: 2,
    label: 'ASCII2D', // 单选
    isPenultimate: true,
    children: [
      {
        id: 21,
        label: '按色彩检索',
      }, {
        id: 22,
        label: '按特征检索',
      }
    ]
  },
  {
    id: 3,
    label: 'EHENTAI', //多选
    isPenultimate: true,
    children: [
      {
        id: 31,
        label: '搜索相似内容',
      }, {
        id: 32,
        label: '搜索封面',
      }, {
        id: 33,
        label: '搜索已删除的内容',
      },
    ]
  },
  {
    id: 4,
    label: 'SAUCENAO',
    children: [
      {
        id: 41,
        label: '隐藏敏感内容',
      }
    ]
  },
  {
    id: 5,
    label: 'TRACEMOE',
    children: [
      {
        id: 51,
        label: '裁剪图片边缘',
      }
    ]
  }
]

const customNodeClass = (data: TreeNodeData, node: Node) => {
  if (data.isPenultimate) {
    return 'is-penultimate'
  }
  return 'not-penultimate'
}
</script>

<template>
  <el-divider content-position="left">选择搜索引擎：</el-divider>
  <el-tree :data="data" show-checkbox node-key="id" accordion :props="{ class: customNodeClass }" />
  <el-button class="query-button" size="small" color="#626aef" :disabled="isDisabled">搜索<el-icon>
      <PictureFilled />
    </el-icon></el-button>
</template>

<style lang="scss">
.el-divider {
  margin-top: 6px;
}

.is-penultimate>.el-tree-node__content {
  color: #626aef;
}

.el-tree-node.is-expanded.is-penultimate>.el-tree-node__children {
  display: flex;
  flex-direction: row;
}

.is-penultimate>.el-tree-node__children>div {
  width: 25%;
}

.query-button {
  position: absolute;
  right: 50%;
  bottom: 0;
  letter-spacing: 3px;
}
</style>