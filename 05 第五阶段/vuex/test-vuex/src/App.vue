<template>
  <div id="app">
    <c-vue></c-vue>
    <h2>---------------App.vue-----------------------</h2>
    <p>这是App.vue的：{{$store.state.index}}</p>

    <button @click="jia">+使用mutations</button>
    <button @click="jian">-使用mutations</button>

    <h2>---------------App.vue中vuex的getters------------------</h2>
    <!-- <p>{{$store.getters.powerindex()}}</p> 不需要加小括号，直接按属性使用 -->
    <p>{{$store.getters.powerindex}}</p>
    <!-- 和计算属性一样 -->

    <a-vue :mes="message"></a-vue>
  </div>
</template>
<script>
  import aVue from "./components/a.vue"
  import cVue from "./components/c.vue"
  export default {
    data(){
      return{
        message:"这是App.vue的aaaaaaa"
      }
    },
    components:{
      aVue,
      cVue
    },
    methods:{
      // 监听时浏览器反应有点慢
      jia(){
        this.$store.commit('increment')
      },
      jian(){
        this.$store.commit('decrement')
      }
    }
  }
</script>
<style>

</style>
