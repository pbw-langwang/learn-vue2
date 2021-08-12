<template>
  <div>
    <h2>This is Profile!</h2>
  </div>
</template>

<script>
export default {
  name:"pro",
  created(){
    console.log("Profile --> created --> 创建组件时调用")
  },
  destroyed(){
    console.log("Profile --> destoryed --> 组件被销毁")
  },
}
</script>

<style>

</style>