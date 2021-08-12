<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>

    <router-link to="/news">新闻</router-link> | 
    <router-link to="/list">列表</router-link>

    <router-view></router-view>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return {
      path:"/list"
    }
  },
  components: {
    HelloWorld
  },
  created(){
    console.log("Home --> created --> 创建组件时调用")
  },
  destroyed(){
    console.log("Home --> destoryed --> 组件被销毁")
  },
  //activated和deactivated这两个函数只有在有keep-alive的时候才可以调用
  activated(){
    console.log("activated")
    console.log(this.$route);
    this.$router.push(this.path);
  },
  deactivated(){
    console.log("deactivated")
    console.log(this.$route);
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    // console.log(from);
    this.path = from.path;
    next();
  }
  // 做到嵌套路由跳转回来，依旧可以回到先前访问页面




  // // 自己的想法：不行，因为页面卸载之后，data中的数据会消失，再次创建组件会更新data
  // created(){
  //   console.log(this.path);
  //   this.$router.push(this.path);
  // },
  // beforeRouteLeave (to, from, next) {
  //   console.log(from.path);
  //   this.path = from.path;
  //   next();
  // }
}
</script>
