// 页面文档解析相关
import { json } from 'itty-router-extras'
import { parse } from '@/utils/api/iqdb'
import { iqdbStr } from '@/test/test-iqdb'

// 测试用例
export const testStr = () => {
  const ret = parse(iqdbStr)
  // json(parse(iqdbStr))
  console.log(ret)
}
