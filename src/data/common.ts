import type { Tree, TipData } from '@/types/common'

export const tipData: TipData = [
  {
    type: 'IQDB',
    feature: '*',
    status: 1
  },
  {
    type: 'ASCII2D',
    feature: '二次元、pixiv',
    status: 0
  },
  {
    type: 'EHENTAI',
    feature: 'R18、本子',
    status: -1
  },
  {
    type: 'TRACEMOE',
    feature: '番剧',
    status: 1
  },
  {
    type: 'SAUCENAO',
    feature: '*',
    status: 0
  },
]

export const treeData: Tree[] = [
  {
    id: 'iqdb',
    label: 'IQDB',
    children: [
      {
        id: 'iqdb-forcegray',
        label: '忽略色彩',
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
        id: 'ehentai-cover',
        label: '封面',
        disabled: true,
      }, {
        id: 'ehentai-similar',
        label: '相似内容',
        disabled: true,
      }, {
        id: 'ehentai-deleted',
        label: '已删除的内容',
        disabled: true,
      },
    ]
  },
  {
    id: 'tracemoe',
    label: 'TRACEMOE',
    children: [
      {
        id: 'tracemoe-cutBorders',
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
