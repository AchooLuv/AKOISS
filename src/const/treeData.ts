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

export type TraceMoeResponse = {
  anilist?: number;
  filename: string;
  episode: null | number;
  from: number;
  to: number;
  similarity: number;
  video: string;
  image: string;
}[]


export const resultData: TraceMoeResponse = [
  {
    "anilist": 101167,
    "filename": "Dungeon ni Deai o Motomeru no wa Machigatte Iru Darouka Familia Myth II - 01 (BD 1280x720 x264 AACx2).mp4",
    "episode": 1,
    "from": 908.42,
    "to": 911.25,
    "similarity": 0.7372974378330136,
    "video": "https://media.trace.moe/video/101167/Dungeon%20ni%20Deai%20o%20Motomeru%20no%20wa%20Machigatte%20Iru%20Darouka%20Familia%20Myth%20II%20-%2001%20(BD%201280x720%20x264%20AACx2).mp4?t=909.835&now=1679497200&token=0NYhxzvaORRoP4koC2GCr0JOgI",
    "image": "https://media.trace.moe/image/101167/Dungeon%20ni%20Deai%20o%20Motomeru%20no%20wa%20Machigatte%20Iru%20Darouka%20Familia%20Myth%20II%20-%2001%20(BD%201280x720%20x264%20AACx2).mp4.jpg?t=909.835&now=1679497200&token=yYWbNQoxhmskzDNlSyqXTSo0ho"
  }, {
    "anilist": 28,
    "filename": "[YAKITATE_JAPAN][DVDRIP][20].mp4",
    "episode": 20,
    "from": 355.33,
    "to": 356.67,
    "similarity": 0.7378829544568507,
    "video": "https://media.trace.moe/video/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4?t=356&now=1679497200&token=QciLkTshvPV2kV1HNvKVXLmRgKs",
    "image": "https://media.trace.moe/image/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4.jpg?t=356&now=1679497200&token=djRJZp3BnaSRvIMut8BwnwjdKsc"
  }, {
    "anilist": 28,
    "filename": "[YAKITATE_JAPAN][DVDRIP][20].mp4",
    "episode": 20,
    "from": 355.33,
    "to": 356.67,
    "similarity": 0.7378829544568507,
    "video": "https://media.trace.moe/video/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4?t=356&now=1679497200&token=QciLkTshvPV2kV1HNvKVXLmRgKs",
    "image": "https://media.trace.moe/image/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4.jpg?t=356&now=1679497200&token=djRJZp3BnaSRvIMut8BwnwjdKsc"
  }, {
    "anilist": 28,
    "filename": "[YAKITATE_JAPAN][DVDRIP][20].mp4",
    "episode": 20,
    "from": 355.33,
    "to": 356.67,
    "similarity": 0.7378829544568507,
    "video": "https://media.trace.moe/video/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4?t=356&now=1679497200&token=QciLkTshvPV2kV1HNvKVXLmRgKs",
    "image": "https://media.trace.moe/image/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4.jpg?t=356&now=1679497200&token=djRJZp3BnaSRvIMut8BwnwjdKsc"
  }, {
    "anilist": 28,
    "filename": "[YAKITATE_JAPAN][DVDRIP][20].mp4",
    "episode": 20,
    "from": 355.33,
    "to": 356.67,
    "similarity": 0.7378829544568507,
    "video": "https://media.trace.moe/video/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4?t=356&now=1679497200&token=QciLkTshvPV2kV1HNvKVXLmRgKs",
    "image": "https://media.trace.moe/image/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4.jpg?t=356&now=1679497200&token=djRJZp3BnaSRvIMut8BwnwjdKsc"
  }, {
    "anilist": 28,
    "filename": "[YAKITATE_JAPAN][DVDRIP][20].mp4",
    "episode": 20,
    "from": 355.33,
    "to": 356.67,
    "similarity": 0.7378829544568507,
    "video": "https://media.trace.moe/video/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4?t=356&now=1679497200&token=QciLkTshvPV2kV1HNvKVXLmRgKs",
    "image": "https://media.trace.moe/image/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4.jpg?t=356&now=1679497200&token=djRJZp3BnaSRvIMut8BwnwjdKsc"
  }, {
    "anilist": 28,
    "filename": "[YAKITATE_JAPAN][DVDRIP][20].mp4",
    "episode": 20,
    "from": 355.33,
    "to": 356.67,
    "similarity": 0.7378829544568507,
    "video": "https://media.trace.moe/video/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4?t=356&now=1679497200&token=QciLkTshvPV2kV1HNvKVXLmRgKs",
    "image": "https://media.trace.moe/image/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4.jpg?t=356&now=1679497200&token=djRJZp3BnaSRvIMut8BwnwjdKsc"
  }, {
    "anilist": 28,
    "filename": "[YAKITATE_JAPAN][DVDRIP][20].mp4",
    "episode": 20,
    "from": 355.33,
    "to": 356.67,
    "similarity": 0.7378829544568507,
    "video": "https://media.trace.moe/video/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4?t=356&now=1679497200&token=QciLkTshvPV2kV1HNvKVXLmRgKs",
    "image": "https://media.trace.moe/image/28/%5BYAKITATE_JAPAN%5D%5BDVDRIP%5D%5B20%5D.mp4.jpg?t=356&now=1679497200&token=djRJZp3BnaSRvIMut8BwnwjdKsc"
  }]