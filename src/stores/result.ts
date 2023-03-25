import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { ResultType } from '@/types/common'

export const useResultStore = defineStore('rews', () => {
  const isLoading = ref(false)
  const resultState = reactive<ResultType[]>([])

  function updateResultState(payload: ResultType[]) {
    resultState.splice(0, 1, ...payload)
  }

  return {
    isLoading,
    resultState,
    updateResultState
  }
})
