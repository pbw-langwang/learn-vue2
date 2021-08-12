<template>
  <div>
    <ul>
      <li>新闻1</li>
      <li>新闻2</li>
      <li>新闻3</li>
      <li>新闻4</li>
    </ul>
  </div>
</template>

<script>
export default {
  created(){
    console.log("HomeNews --> created --> 创建组件时调用")
  },
  destroyed(){
    console.log("HomeNews --> destoryed --> 组件被销毁")
  },
}
</script>

<style>

</style>