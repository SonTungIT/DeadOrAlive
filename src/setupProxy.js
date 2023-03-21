const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://game-rpg.herokuapp.com',
            changeOrigin: true,
        }),
        createProxyMiddleware({
            target: 'https://dead-or-alive-chi.vercel.app',
            changeOrigin: true,
        }),
    );
};
