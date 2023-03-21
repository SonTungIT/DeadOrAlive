const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('https://game-rpg.herokuapp.com/api/v1/auth/login', {
            target: 'https://dead-or-alive-chi.vercel.app',
            changeOrigin: true,
        }),
    );
};
