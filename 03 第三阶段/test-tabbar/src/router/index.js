import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home/Home.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    redirect:"/home"
  },
  {
    path: "/home",
    component:Home
  },
  {
    path: "/classify",
    component: () => import('../views/Classify/Classify.vue')
  },
  {
    path: "/shopcart",
    component: () => import('../views/ShopCart/ShopCart.vue')
  },
  {
    path: "/mine",
    component: () => import('../views/Profile/Profile.vue')
  },
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
