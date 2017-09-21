import realize from './realize'
import Router from 'koa-router'
let router = Router();

router.get('/', async (ctx, next) => {
    await ctx.redirect('/index')
})

router.get(/\/index(\/:p_id)?/, async function (ctx, next) {
    try{
        let html = await realize.renderToString(ctx.req.url)
        ctx.body = html
    }catch(e){
        console.error("vue-ssr-error", e)
    }

})

export default router
