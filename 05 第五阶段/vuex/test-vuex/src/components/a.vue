<template>
  <div>
    <h2>----------------a.vue------------------</h2>
    <p>这是a.vue的：{{$store.state.index}}</p>
    <button @click="btnClick">a.vue的按钮，直接操作state</button>
    <b-vue :M="mes"></b-vue>
  </div>
</template>

<script>
  import bVue from "./b.vue"
  export default {
    methods: {
      btnClick(){
        console.log(this.$store)
        this.$store.state.index--;
      }
    },
    props:{
      mes:String
    },
    components:{
      bVue
    }
  }
</script>

<style>

</style>