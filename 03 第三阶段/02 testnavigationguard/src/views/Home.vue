<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <router-link to="/news">新闻</router-link> | 
    <router-link to="/list">列表</router-link>
    <!-- <router-link to="/home/news">新闻</router-link> | 
    <router-link to="/home/list">列表</router-link> -->
    <router-view></router-view>


    <!-- <h2>{{data1}}</h2> -->
    <!-- <button @click="btnClick">按钮</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  // data(){
  //   return{
  //     data1:"aaaaa"
  //   }
  // },
  components: {
    HelloWorld
  },
  // methods:{
  //   btnClick(){
  //     this.data1 = "bbbbb";
  //   }
  // },
  created(){
    document.title = "首页";
    console.log("created --> 创建组件时调用")
  },
  // mounted(){
  //   console.log("mounted --> 挂载时调用")
  // },
  // updated(){
  //   console.log("updated --> 组件更新时调用 --> 首次加载数据不会调用")
  // }
  destroyed(){
    console.log("destoryed --> 组件被销毁")
  }
}
</script>
