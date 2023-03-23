import { ElNotification } from 'element-plus'

export const getHMS = (stamp: number): string => {
  const iso = new Date(stamp * 1000).toISOString(),
    [, timeZ] = iso.split('T'),
    [time] = timeZ.split('Z')
  return time
}

export const getPercent = (num: number): string => {
  return Math.round(num * 10000) / 100 + '%'
}

export const tipsType = (done: boolean = true) => {
  if (done) {
    ElNotification.success({
      title: 'Success',
      message: '搜索成功',
      position: 'top-right',
      offset: 220,
      duration: 3000,
      showClose: false,
    })
  } else {
    ElNotification.error({
      title: 'Error',
      message: '搜索失败',
      position: 'top-right',
      offset: 20,
      duration: 3000,
      showClose: false,
    })
  }
}