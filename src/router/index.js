import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/index.vue'
import modules from './module'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/yyhx',
    name: 'yyhx',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/yyhx.vue')
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/test'),
    redirect: modules.test[0].path,
    children: modules.test
  }
]

const router = new VueRouter({
  routes
})

export default router
