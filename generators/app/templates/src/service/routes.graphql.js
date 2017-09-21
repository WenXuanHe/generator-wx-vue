import Router from 'koa-router'
import { graphqlKoa, graphiqlKoa } from 'apollo-server-koa'
import schema from '../graph/schema'

let router = Router();

router.post('/graphql', graphqlKoa({ schema: schema }));
router.get('/graphql', graphqlKoa({schema: schema}));
router.get('/graphiql', graphiqlKoa({ endpointURL: '/graphql' }));

export default router
