<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/profile">Profile</router-link>
    </div>

    <!-- keep-alive就是为了防止组件频繁的创建和销毁，还可以使用activated和deactivated -->
    <!-- 谁被包裹，谁就不会被频繁创建/销毁，但是不会层叠，及子元素中有路由，子元素的还是会被频繁创建/销毁 -->
    <!-- 可以用exclude，这个就是name的一个作用，多个就是在中间加,，不要随便加空格 -->
    <!-- 一般和正则表达式有关的就不要随便加空格 -->
    <keep-alive exclude="ro">
      <router-view/>
    </keep-alive>

    <!-- 自己的想法：
    <router-view/> -->
  </div>
</template>

<script>
export default {
  name:"App",
  created() {
    console.log("App --> created");
  },
  destroyed() {
    console.log("App --> destroyed");
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
