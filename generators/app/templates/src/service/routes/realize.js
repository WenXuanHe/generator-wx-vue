const { createBundleRenderer } = require('vue-server-renderer');
const cheerio = require('cheerio')
const template = require('fs').readFileSync('./src/index.html', 'utf-8')
const serverBundle = require('../../../dist/vue-ssr-server-bundle.json')
const clientManifest = require('../../../dist/vue-ssr-client-manifest.json')

// const $ = cheerio.load(template);
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template: template, // （可选）页面模板
    clientManifest // （可选）客户端构建 manifest
})

module.exports = {

    renderToString: function (url) {

        return new Promise(function (resolve, reject) {

            renderer.renderToString({ url }, (err, html) => {

                if (err) reject(err);

                resolve(html);
            })
        })
    }
};