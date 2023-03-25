import ako from '@/utils/http'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Self } from '@/types/common'
import type { AxiosRequestConfig } from 'axios'

type DataRaw = Blob | MediaSource | ArrayBuffer | string | null

export const useSearchStore = defineStore('search', () => {
  const imgRaw = ref<DataRaw>()
  const imgType = ref<string>()
  function searchAction(path: string, payload?: Self, config?: AxiosRequestConfig) {
    return ako.post(path, payload, config)
  }
  function updateImgRaw(raw: DataRaw, type: string) {
    imgRaw.value = raw
    imgType.value = type
  }
  return {
    imgRaw,
    imgType,
    searchAction,
    updateImgRaw
  }
})