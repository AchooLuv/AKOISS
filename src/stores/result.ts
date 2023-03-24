import { Request } from '@/utils/http';
import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { ResultType } from '@/const/treeData'
import type { AxiosRequestConfig } from 'axios'

const bgm = new Request({ baseURL: 'https://api.bgm.tv', timeout: 60000 })

export type Self = {
  [idx: string]: unknown
}

export const useResultStore = defineStore('rews', () => {
  const isLoading = ref(false)
  const resultState = reactive<ResultType[]>([])

  function calendarAction(path: string) {
    return bgm.get(path)
  }

  function animeAction(path: string, payload?: Self, config?: AxiosRequestConfig) {
    return bgm.post(path, payload, config)
  }

  function updateResultState(payload: ResultType[]) {
    resultState.splice(0, 1, ...payload)
  }

  return {
    isLoading,
    resultState,
    calendarAction,
    animeAction,
    updateResultState
  }
})
