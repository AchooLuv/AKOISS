export interface Tree {
  id: string
  label: string
  disabled?: boolean
  children?: Tree[]
}

export const treeData: Tree[] = [
  {
    id: 'iqdb',
    label: 'IQDB',
    disabled: true,
    children: [
      {
        id: 'iqdb-1',
        label: '搜索时除去颜色',
        disabled: true,
      }
    ]
  },
  {
    id: 'ascii2d',
    label: 'ASCII2D',
    disabled: true,
    children: [
      {
        id: 'ascii2d-1',
        label: '按色彩检索',
        disabled: true,
      }, {
        id: 'ascii2d-2',
        label: '按特征检索',
        disabled: true,
      }
    ]
  },
  {
    id: 'ehentai',
    label: 'EHENTAI',
    disabled: true,
    children: [
      {
        id: 'ehentai-1',
        label: '搜索相似内容',
        disabled: true,
      }, {
        id: 'ehentai-2',
        label: '搜索封面',
        disabled: true,
      }, {
        id: 'ehentai-3',
        label: '搜索已删除的内容',
        disabled: true,
      },
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
  },
  {
    id: 'saucenao',
    label: 'SAUCENAO',
    disabled: true,
    children: [
      {
        id: 'saucenao-1',
        label: '隐藏敏感内容',
        disabled: true,
      }
    ]
  }
]