import { reactive, ref } from "vue";
import { defineStore } from "pinia";

type checkState = string[][]

const checkState = reactive<checkState>(Array(6).fill([]))

export const useTreeStore = defineStore('tree', () => {
  function updateCheckState(payload: string[]) {
    checkState.splice(Number(payload[0]), 1, payload)
  }

  return {
    updateCheckState
  }
})