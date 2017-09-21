import { createBundleRenderer } from 'vue-server-renderer'
import fs from 'fs'
import path from 'path'
import * as serverBundle from '../../../dist/vue-ssr-server-bundle.json'
import * as clientManifest from '../../../dist/vue-ssr-client-manifest.json'

const template = fs.readFileSync('./src/index.html', 'utf-8')

// const $ = cheerio.load(template);
const renderer = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template: template, // （可选）页面模板
    clientManifest // （可选）客户端构建 manifest
})

export const renderToString = function (url) {

    return new Promise(function (resolve, reject) {

        renderer.renderToString({ url }, (err, html) => {

            if (err) reject(err);

            resolve(html);
        })
    })
}

export default {
    renderToString
}
