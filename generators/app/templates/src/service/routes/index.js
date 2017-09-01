let realize = require('./realize')
let router = require('koa-router')()

router.get('/', async (ctx, next) => {
    await ctx.redirect('/index')
})

router.get('/test', async (ctx, next) => {
    try{
        let html = await realize.renderToString(ctx.req.url)
        ctx.body = html
    }catch(e){
        console.error("vue-ssr-error", e)
    }
})

router.get('/index', async function (ctx, next) {
    try{
        let html = await realize.renderToString(ctx.req.url)
        ctx.body = html
    }catch(e){
        console.error("vue-ssr-error", e)
    }
    
})

module.exports = router