const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''
  // IQDB
  if (req.url.startWith('/iqdb')) {
    target = 'http://iqdb.org/'
  }
  // TRACEMOE
  if (req.url.startWith('/trace')) {
    target = 'https://api.trace.moe/'
  }

  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/iqdb/': '/',
      '/trace/': '/'
    }
  })
}