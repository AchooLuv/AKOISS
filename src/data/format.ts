import { ElNotification } from 'element-plus'

export const getHMS = (stamp: number): string => {
  const iso = new Date(stamp * 1000).toISOString(),
    [, timeZ] = iso.split('T'),
    [time] = timeZ.split('Z')
  return time
}

export const tipsType = (done: boolean, msg: string) => {
  if (done) {
    ElNotification.success({
      title: 'Success',
      message: msg,
      position: 'top-right',
      offset: 220,
      duration: 3000,
      showClose: false,
    })
  } else {
    ElNotification.error({
      title: 'Error',
      message: msg,
      position: 'top-right',
      offset: 20,
      duration: 3000,
      showClose: false,
    })
  }
}