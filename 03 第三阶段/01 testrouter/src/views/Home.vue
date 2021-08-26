<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HelloWorld :msg="aaa"/>
    <!-- 绑定data中的数据的时候才要加: -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data(){
    return{
      aaa:"fhakfhakfafhf"
    }
  },
  components: {
    HelloWorld
  }
}
</script>
