import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

function loadView(view,name) {
    return () => import(/* webpackChunkName: "views/[request]/[request]" */ `@/views/${view}.vue`)
}

export default new Router({
    mode: 'hash',
    routes: [
        {
            path: '/home',
            name: 'home',
            component: loadView('Home','home')
        },
        {
            path: '/about',
            name: 'about',
            component: loadView('About','about')
        }
    ]
})
