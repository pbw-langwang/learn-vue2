<template>
  <div>
    <h2>------c.vue测试moudle---------</h2>
    <!-- 这里必须指定是哪一个module(a)下面,vue会默认把其放入module(a)为名称的对象中 -->
    <h3>{{$store.state.AModule.name}}</h3>
    <h3>{{$store.getters.fullname}}</h3>
    <h3>{{$store.getters.fullname2}}</h3>
    <h3>{{$store.getters.fullname3}}</h3>

    <button @click="changeAname">改变aModule里面的name</button>
    <button @click="updatename">异步改变aModule里面的name</button>

  </div>
</template>

<script>
  export default {
    methods: {
      // 在module中定义的mutations，用一样的提交方式就可以 ---> 如果module里面的和外面的vue.store冲突了，那么先执行vue.store的，然后执行module的
      changeAname(){
        this.$store.commit("changename","lisi")
      },
      updatename(){
        this.$store.dispatch('updatename')
      }
    },
  }
</script>

<style>

</style>