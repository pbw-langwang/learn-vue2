<template>
  <!-- 这只是一个组件，在home.vue中被引用 -->
  <div class="hello">
    <p>这只是一个组件，在home.vue中被引用---->测试是不是刷新，页面也会刷新---->会</p>
    <h1>{{ msg }}</h1>
    <hr/>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
