import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress'

Vue.use(VueRouter)
NProgress.configure({ minimum: 0.1 })

const routes = [
    {
        path: '/',
        name: 'index',
        component: resolve=>require(['../views/index.vue'],resolve),
    },
]

const router = new VueRouter({
    routes
})

router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
})

router.afterEach(transition => {
	NProgress.done();
});

export default router
