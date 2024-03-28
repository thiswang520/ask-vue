import {createRouter, createWebHashHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import(/* webpackChunkName: "about" */ '../views/home/Home.vue'),
    },
    // {
    //     path: '/login',
    //     name: 'Login',
    //     component: () => import(/* webpackChunkName: "about" */ '../views/login/Login.vue'),
    //     beforeEnter (to, frin, next) {
    //         const { isLogin } = localStorage
    //         isLogin ? next({ name: 'Home' }) : next()
    //     }
    // }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// router.beforeEach((to, from, next) => {
//     const { isLogin } = localStorage
//     isLogin || (to.name === 'Login') || (to.name === 'Register') ? next() : next({ name: 'Home' })
// })

export default router

