# generator-wx-vue [![NPM version][npm-image]]

## 基于koa2和vue的PC端脚手架

### Installation

First, install [Yeoman](http://yeoman.io) and generator-wx-vue using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-wx-vue
```

Then generate your new project:

```bash
yo wx-vue
```


## Getting To Know

 * 默认配置vue+vue-router+vuex，适用于较大项目
 * 利用webpack配置vue的服务端渲染，首屏直出，其余页面惰性加载
 * 配置travis持续集成，一件键署到服务器
 * 配置typeScript config，可在.ts文件直接使用typeScript
 * 配置karma，e2e测试文件，可快速，方便的书写单元测试
 * 配置了restful和graphQl两种方式请求服务器，可根据需要选择
 * 默认配置postcss+cssNext书写css

## License

Apache-2.0 © [hewenxuan]()


[npm-image]: https://badge.fury.io/js/generator-wx-vue.svg
[npm-url]: https://npmjs.org/package/generator-wx-vue
[travis-image]: https://travis-ci.org//generator-wx-vue.svg?branch=master
[travis-url]: https://travis-ci.org//generator-wx-vue
[daviddm-image]: https://david-dm.org//generator-wx-vue.svg?theme=shields.io
[daviddm-url]: https://david-dm.org//generator-wx-vue
[coveralls-image]: https://coveralls.io/repos//generator-wx-vue/badge.svg
[coveralls-url]: https://coveralls.io/r//generator-wx-vue
