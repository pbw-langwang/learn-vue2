import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from "axios"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method:"get"
// }).then(res => {
//   console.log(res);
// })

axios({
  url: "https://api.muxiaoguo.cn/api/QqInfo",
  method: "get",
  params: {
    qq:"1911847149",
  },
}).then(res => {
  console.log(res);
})


// axios.get("https://api.muxiaoguo.cn/api/QqInfo", {
//   qq:"1911847149"
// }).then(res => {
//   console.log(res);
// })
