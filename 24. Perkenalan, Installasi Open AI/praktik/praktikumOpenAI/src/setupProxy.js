// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://generativeai.googleapis.com',
      changeOrigin: true,
      pathRewrite: {
        '^/api': '', // Hapus /api dari URL
      },
    })
  );
};
