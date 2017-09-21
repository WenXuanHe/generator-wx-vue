import Koa from 'koa'
import Router from 'koa-router'
import views from 'koa-views'
import json from 'koa-json'
import onerror from 'koa-onerror'
import Bodyparser from 'koa-bodyparser'
import render from 'koa-swig'
import co from 'co'
import path from 'path'
import index from './routes/index'
import apis from './routes/apis'
import graphql from './routes/graphql'

const app = new Koa()
const router = Router()
const bodyparser = Bodyparser()
const way = {
  dist:  path.resolve(__dirname, '../../', 'dist'),
  views: path.resolve(__dirname, '../../', 'views')
};
// error handler
onerror(app);

app.context.render = co.wrap(render({
    root: way.views,
    autoescape: true,
    cache: 'memory',
    ext: 'html',
    writeBody: true
}));

// middlewares
app.use(bodyparser);
app.use(json());
app.use(require('koa-static')(way.dist));
// app.use(historyFallback())
app.use(views(way.views), {
  extension: 'html'
});

app.use(index.routes(), index.allowedMethods());
app.use(apis.routes(), apis.allowedMethods());
app.use(graphql.routes(), graphql.allowedMethods());
let port = 80;
app.listen(port);
console.log(`server on ${port}`);
