const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        'https://game-rpg.herokuapp.com/api/v1/auth/login',
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
