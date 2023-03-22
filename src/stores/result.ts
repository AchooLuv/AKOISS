import { ref, reactive } from "vue";
import { defineStore } from "pinia";

export type TraceMoeResponse = {
  anilist?: {
    id: number;
    idMal: number;
    title: { native: string; romaji: string | null; english: string | null };
    synonyms: string[];
    isAdult: boolean;
  } | number;
  filename: string;
  episode: null | number;
  from: number;
  to: number;
  similarity: number;
  video: string;
  image: string;
}[]

export const useResultStore = defineStore('rews', () => {
  const isLoading = ref(false)
  const resultState = reactive<TraceMoeResponse>([{
    filename: '',
    episode: 0,
    from: 0,
    to: 0,
    similarity: 0,
    video: '',
    image: '',
  }])
  function updateResultState(payload: TraceMoeResponse) {
    resultState.splice(0, 1, ...payload)
  }

  return {
    isLoading,
    resultState,
    updateResultState
  }
})