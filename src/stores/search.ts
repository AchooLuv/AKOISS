import ako from '@/utils/http'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Self } from '@/types/common'
import type { AxiosRequestConfig } from 'axios'

export const useSearchStore = defineStore('search', () => {
  const imgRaw = ref<File>()
  const imgType = ref<string>()
  function searchAction(path: string, payload?: Self, config?: AxiosRequestConfig) {
    return ako.post(path, payload, config)
  }
  function updateImgRaw(raw: File, type: string) {
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
