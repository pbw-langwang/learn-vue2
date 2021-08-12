import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta: {
      title:"首页"
    },
    // meta --> 元数据 --> 描述数据的数据
    component: Home,
    children: [
      {
        path: "news",
        component: () => import("../views/HomeNews.vue")
      },
      {
        path: "list",
        component: () => import("../views/HomeList.vue")
      }
    ]
  },
  {
    path: '/about',
    meta: {
      title: "关于"
    },
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: "/profile",
    component: () => import("../views/Profile.vue"),

    // 局部导航守卫
    beforeEnter:(to, from, next) => {
      console.log("beforeEach");
      next()
    }
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

// 全局导航守卫
router.beforeEach((to, from, next) => {
  document.title = to.matched[0].meta.title
  next()
})

export default router
