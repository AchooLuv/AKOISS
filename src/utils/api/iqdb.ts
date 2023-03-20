import * as cheerio from 'cheerio';
import * as _ from 'lodash';

export const BASE_URL = 'https://iqdb.org/';

export function parse(body: string) {
  const $ = cheerio.load(body);
  return _.map($('table'), (result) => {
    const content = $(result).text(),
      [link] = $('td.image > a', result),
      [image] = $('td.image img', result);
    if (!link) return;
    const [, similarity] = content.match(/(\d+%)\s*similarity/) ?? [],
      [, level] = content.match(/\[(\w+)\]/) ?? [],
      [, resolution] = content.match(/(\d+×\d+)/) ?? [];

    return {
      url: new URL(link.attribs.href, BASE_URL).toString(),
      image: new URL(image.attribs.src, BASE_URL).toString(),
      similarity: parseFloat(similarity),
      resolution: resolution,
      level: level,
    };
  })
    .filter(<T>(v: T | undefined): v is T => v !== undefined)
    .sort((a, b) => a.similarity - b.similarity)
    .reverse();
}