const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {


    /*版本>1.0*//*本地*/
    app.use('/api',createProxyMiddleware({
        target: 'http://localhost:3001',
        changeOrigin: true,
        pathRewrite:{//路径替换

        }
    }));

    app.use('/mock', createProxyMiddleware({
        target: 'http://localhost:3333',
        changeOrigin: true,
        pathRewrite: { //路径替换
            '^/mock': '', // axios 访问/douban/v2 == target + /v2
        }
    }));



};
