export type Self = {
  [idx: string]: unknown
}

export interface Tree {
  id: string
  label: string
  disabled?: boolean
  children?: Tree[]
}

export type TipData = {
  type: string,
  feature: string,
  status: boolean
}[]

export type ResultType = {
  anilist?: {
    id: number;
    idMal: number;
    title: { native: string; romaji: string | null; english: string | null };
    synonyms: string[];
    isAdult: boolean;
  };
  filename: string;
  aniname: string;
  episode: null | number;
  from: number;
  to: number;
  similarity: number;
  video: string;
  image: string;
}

export interface TraceMoeResponse {
  frameCount: number;
  error: string;
  result: ResultType[];
}