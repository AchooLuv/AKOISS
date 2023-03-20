import * as cheerio from 'cheerio';
import * as _ from 'lodash';

export const BASE_URL = 'https://ascii2d.obfs.dev/';

export function parse(body: string) {
  const $ = cheerio.load(body, { decodeEntities: true });
  return _.map($('.item-box'), (item) => {
    const detail = $('.detail-box', item),
      hash = $('.hash', item),
      info = $('.info-box > .text-muted', item),
      [image] = $('.image-box > img', item);

    const [source, author] = $('a[rel=noopener]', detail);

    if (!source && !author) return;

    return {
      hash: hash.text(),
      info: info.text(),
      image: new URL(
        image.attribs['src'] ?? image.attribs['data-cfsrc'],
        BASE_URL
      ).toString(),
      source: source
        ? { link: source.attribs.href, text: $(source).text() }
        : undefined,
      author: author
        ? { link: author.attribs.href, text: $(author).text() }
        : undefined,
    };
  }).filter(<T>(v: T | undefined): v is T => v !== undefined);
}