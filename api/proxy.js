const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = (req, res) => {
  let target = ''
  // IQDB
  if (req.url.startsWith('/iqdb')) {
    target = 'http://iqdb.org/'
  }
  // TRACEMOE
  if (req.url.startsWith('/trace')) {
    target = 'https://api.trace.moe/'
  }

  createProxyMiddleware({
    target: target,
    changeOrigin: true,
    pathRewrite: {
      '^/iqdb/': '',
      '^/trace/': ''
    }
  })(req, res)
}