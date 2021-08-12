<template>
  <!-- Profile:档案 -->
  <div>
    <h2>this is Peofile!</h2>
    <h2>{{$route.query}}</h2>

    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  methods:{
    btnClick(){
      console.log(this.$route); 
      //这个就是index.js里面的路由 ---> Profile路由
      //但是打印出来的结果不是一样的（相似），vue会自动加一些属性进去
      console.log(this.$router);  // 判断是否和main.js里面的router一致
    }
  }
}
</script>