<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="blue">
        <img slot="img" src="./assets/img/tabbar/home.png">
        <img slot="active-img" src="./assets/img/tabbar/home-active.png">
        <p slot="text">首页</p>
      </tab-bar-item>
      <tab-bar-item path="/classify">
        <img slot="img" src="./assets/img/tabbar/classify.png">
        <img slot="active-img" src="./assets/img/tabbar/classify-active.png">
        <p slot="text">分类</p>
      </tab-bar-item>
      <tab-bar-item path="/shopcart">
        <img slot="img" src="./assets/img/tabbar/shopping-cart.png">
        <img slot="active-img" src="./assets/img/tabbar/shopping-cart-active.png">
        <p slot="text">购物车</p>
      </tab-bar-item>
      <tab-bar-item path="/mine">
        <img slot="img" src="./assets/img/tabbar/mine.png">
        <img slot="active-img" src="./assets/img/tabbar/mine-active.png">
        <p slot="text">我的</p>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<style>
  @import "./assets/css/base.css";
</style>

<script> 
  import TabBar from './components/tabbar/TabBar.vue';
  import TabBarItem from './components/tabbar/TabBarItem.vue';

  export default {
    components:{
      TabBar,
      TabBarItem
    }
  }
</script>
