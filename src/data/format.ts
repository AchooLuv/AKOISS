import * as cheerio from 'cheerio';
import * as _ from 'lodash';
import { ElNotification } from 'element-plus'

import type { Self, ResultType } from '@/types/common'

export const getParams = (data: string[], type: boolean) => {
  const params = {} as Self
  data.length && data.forEach((v: string) => {
    type ? params[v] = 'on' : params[v] = true
  })
  return params
}

export const getHMS = (stamp: number): string => {
  const iso = new Date(stamp * 1000).toISOString(),
    [, timeZ] = iso.split('T'),
    [time] = timeZ.split('Z')
  return time
}

export const tipsType = (done: boolean, msg: string) => {
  if (done) {
    ElNotification.success({
      title: 'Success',
      message: msg,
      position: 'top-right',
      offset: 220,
      duration: 3000,
      showClose: false,
    })
  } else {
    ElNotification.error({
      title: 'Error',
      message: msg,
      position: 'top-right',
      offset: 20,
      duration: 3000,
      showClose: false,
    })
  }
}

export const iqdbParse = (body: string) => {
  const $ = cheerio.load(body);
  return _.map($('table'), (result) => {
    const content = $(result).text(),
      [link] = $('td.image > a', result),
      [image] = $('td.image img', result);
    if (!link) return;
    const [, similarity] = content.match(/(\d+%)\s*similarity/) ?? [],
      [, level] = content.match(/\[(\w+)\]/) ?? [],
      [, size] = content.match(/(\d+×\d+)/) ?? [];

    return {
      url: new URL(link.attribs.href, 'http://iqdb.org/').toString(),
      image: new URL(image.attribs.src, 'http://iqdb.org/').toString(),
      similarity: parseFloat(similarity),
      size: size,
      level: level,
    };
  })
    .filter(<T>(v: T | undefined): v is T => v !== undefined)
    .sort((a, b) => a.similarity - b.similarity)
    .reverse();
}

export const traceParse = (data: ResultType[]) => {
  return data.filter((v: ResultType) => {
    if (v.similarity > 0.7) {
      v.aniname = v.anilist?.title.native as string
      return v.similarity > 0.7
    }
  })
}