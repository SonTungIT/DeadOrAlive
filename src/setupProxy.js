const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
    app.use(
        createProxyMiddleware('auth-controller/login', {
            target: 'https://project-game-rpg.herokuapp.com/swagger-ui/index.html?fbclid=IwAR0voiPpsI2Cxj1yScqpIPEsLJ49d66hV9V0BiRpKzbtIf3KpR76xZ_uFEM#/',
            changeOrigin: true,
        }),
    );
};
