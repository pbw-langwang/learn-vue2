<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/about" >About</router-link> |
      <router-link :to="'/user/'+userid"  tag="button">user</router-link> |
      <router-link :to="{path:'/profile',query:{name:'pbw',age:20,height:176}}">Profile</router-link> |
      <button @click="userClick">user</button>
      <button @click="profileClick">Profile</button>
      <button @click="profileClick2">Profile2</button>
      <button @click="profileClick3">Profile3</button>
      <button @click="profileClick4">Profile4</button>
    </div>
    <router-view/>
    <!-- 这个就验证了每一个页面就是一个组件 -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      userid:"pbw",
      userid2:"wcz",
      query2:{
        name:"wcz",
        age:22,
        height:172
      }
    }
  },
  methods:{
    userClick(){
      this.$router.push("/user/"+this.userid2)
    },
    profileClick(){
      this.$router.push({
        path:"/profile",
        query:{
          name:"wcz",
          age:22,
          height:172
        }
      })
    },
    profileClick2(){
      this.$router.push("/profile?"+this.query2)
      // 有问题[object Object]
    },
    profileClick4(){
      this.$router.push("/profile?query2="+this.query2)
      // 有问题[object Object]
    },
    profileClick3(){
      this.$router.push("/profile?name="+this.query2.name)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
