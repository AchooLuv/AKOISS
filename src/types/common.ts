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

export type AniDBType = {
  id: number,
  title: string
}

export type ResultType = {
  anilist: number;
  aniname?: string,
  filename: string;
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