<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  created(){
    console.log("About --> created --> 创建组件时调用")
  },
  destroyed(){
    console.log("About --> destoryed --> 组件被销毁")
  },
}
</script>
