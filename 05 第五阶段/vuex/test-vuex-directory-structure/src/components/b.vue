<template>
  <div>
    <h2>------------这是b.vue的内容--------------------</h2>
    <h3>{{M}} ---> app.vue传递到了b.vue通过父子传参</h3>

    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2>
    <h2>{{$store.getters.moreAgestu(12)}}</h2>

    <button @click="addcount(5)">+5按钮</button>
    <button @click="addcount(15)">+15按钮</button>
    <button @click="addstu()">添加学生按钮</button>

    <h2>-----------尝试mutations的响应式-------------</h2>
    <h3>{{$store.state.cat}}</h3>
    <button @click="changecat">添加属性到cat</button>
    <button @click="deletecat">删除cat的属性</button>
    <button @click="updatacat">修改cat属性（响应式）</button>
    <!-- <button @click="updatacatIn">修改cat属性（异步非响应式）</button>  这个会和下面的冲突-->
    <button @click="aupdatacatIn">修改cat属性（异步使用actions变为响应式）</button>
    <button @click="aupdatacatIn2">修改cat属性（异步使用actions变为响应式 --> 优雅回调）</button>

    <h2>--------尝试mutations的响应式是否在组件中适用---------</h2>
    <h3>{{student}}</h3>
    <button @click="changestu">添加属性到student</button>
    <button @click="deletestu">删除student中属性</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        student:{
          name:"wzw",
          age:22
        }
      }
    },
    props:{
      M:String
    },
    methods:{
      addcount(count){
        this.$store.commit("addcount",count)
      },
      addstu(){
        const stu = {
          name:"ts",
          age:21
        }
        this.$store.commit("addstu",stu);
      },

      //mutation里面的修改
      changecat(){
        this.$store.commit("changecat")
      } ,
      deletecat(){
        this.$store.commit("deletecat")
      } ,
      updatacat() {
        this.$store.commit("updatacat")
      },
      updatacatIn() {
        this.$store.commit("updatacatIn")
      },

      // 不优雅的回调方式
      aupdatacatIn(){
        this.$store.dispatch('aupdatacatIn',{
          message:{
            a:"aaaa",
            b:"bbbb"
          },
          success:()=>{
            console.log("更改已经完成！")
          }
        })
      },

      aupdatacatIn2(){
        this.$store.dispatch('aupdatacatIn2', "我是携带的信息")
        // 这里接收到的就是promise对象
        .then(res=>{
          console.log("执行完成");
          console.log(res);
        })
      },

      // 和mutations一样，无法检测其改变
      changestu(){
        this.student["id"] = 12;
      },
      deletestu(){
        delete this.student.name
      }
    }
  }
</script>

<style>

</style>