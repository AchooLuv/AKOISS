import ako from "@/utils/http";
import { ref } from "vue";
import { defineStore } from "pinia";

type DataRaw = Blob | MediaSource | ArrayBuffer | string | null

export type Self = {
  [idx: string]: unknown
}


export const useSearchStore = defineStore('search', () => {
  const imgRaw = ref<DataRaw>()
  function searchAction(path: string, payload: Self) {
    return ako.post(path, payload)
  }
  function updateImgRaw(payload: DataRaw) {
    imgRaw.value = payload
  }
  return {
    imgRaw,
    searchAction,
    updateImgRaw
  }
})