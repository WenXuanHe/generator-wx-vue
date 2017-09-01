import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home'

Vue.use(Router)

export function createRouter() {

    return new Router({
        mode: 'history',
        base: __dirname,
        routes: [
            { path: '/index', component: Home },
            { path: '/test', component: () => import('./components/Test.vue') },
        ]
    })
}