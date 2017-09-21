
import Router from 'koa-router'
import TODO from '../model/index'
const router = Router()

router.get('/apis/getDeptAndStaff', async (ctx, next) => {
    let todo = new TODO();
    return ctx.body = todo.getDeptAndStaff(ctx.query.p_id);
});
router.get('/apis/getCommonPassengerList', async (ctx, next) => {
    let result = new TODO().getCommonPassengerList();
    return ctx.body = result;
});
router.get('/apis/getCompanyInfo', async (ctx, next) => {
    let todo = new TODO();
    return ctx.body = todo.getRoot();
});
router.get('/apis/getDepartNames', async (ctx, next) => {
    let todo = new TODO();
    return ctx.body = todo.getDepartNames(ctx.query.p_id);
});

export default router
