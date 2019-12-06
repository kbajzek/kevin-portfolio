const proxy = require('http-proxy-middleware');

module.exports = function (app) {
    if (JSON.stringify(process.env.NODE_ENV) === JSON.stringify('development')) {
        app.use(proxy('/resume', {
            target: 'http://localhost:5000'
        }));
    }
}