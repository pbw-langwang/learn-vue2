<template>
  <div>
    <h2>this is user page</h2>
    <h3>{{userName}}</h3>
    <h3>{{$route.params.abc}}</h3>
  </div>
</template>

<script>
  export default {
    name:"User",
    data(){
      return{

      }
    },
    methods:{},
    components:{},
    computed:{
      userName(){
        return this.$route.params.abc
      }
    },
    filters:{},
  }
</script>