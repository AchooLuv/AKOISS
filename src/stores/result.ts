import { ref, reactive } from 'vue';
import { defineStore } from 'pinia';
import type { ResultType } from '@/types/common'

export const useResultStore = defineStore('rews', () => {
  const isLoading = ref(false)
  const engineType = ref<string>()
  const resultState = reactive<ResultType[]>([])

  function updateResultState(payload: ResultType[]) {
    resultState.splice(0, 1, ...payload)
  }

  function updateEngineState(payload: string) {
    engineType.value = payload;
  }

  return {
    isLoading,
    engineType,
    resultState,
    updateEngineState,
    updateResultState
  }
})
