import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const user = () => import('../views/User.vue');

const routes = [
  // {
  //   path: '',
  //   // redirect重定向
  //   redirect:"/"
  // },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // 上述代码会报错RangeError: Maximum call stack size exceeded，见：https://www.cnblogs.com/fairylee/p/10932877.html，大致就是循环跳转页面，导致栈超出大小
  
  // {
  //   path: '',
  //   // redirect重定向
  //   redirect:"/home"
  // },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  //上述代码没有结果，因为根本没有home


  
  // 正确：修改App.vue里面的东西 --> <router-link to="/home">Home</router-link> --> 不修改虽然还是对的，但是不变色
  {
    path: '',
    // 可以是'',也可以是'/'
    // redirect --> 重定向
    redirect:"/home"
  },
  // 并不是第一个访问所以放第一个，其实不管放哪里就一样，但是对于特殊的一般放最前面---> 好找、规范
  {
    path: '/home',
    name: 'Home',
    // name可有可无
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //解释：大致就是这样写可以做到懒加载，以免一开始就加载浪费资源
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),

    // 嵌套路由
    children: [
      {
        path: "/",
        redirect:"news"
      },
      {
        path: "news",
        component: () => import("../views/AboutNews.vue")
      },
      {
        path: "message",
        component: () => import("../views/AboutMessage.vue")
      }
    ]
  },
  {
    path: '/user/:abc',
    // 动态路由
    component:user
  },
  {
    path: "/profile",
    component: () => import("../views/Profile.vue")
  }
]

const x = routes.length;
console.log(routes[x - 1]);

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode:"history",
})

export default router
