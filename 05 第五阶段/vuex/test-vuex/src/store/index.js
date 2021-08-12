import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const aModule = {
  // 调用时要指定是哪一个module
  state: {
    name:"zhangsan"
  },

  // mutations不管定义在哪里都是一样的方式调用
  mutations: {
    // 默认传入的是该module的state
    changename(state, payload) {
      console.log("这是aModule里面的changename");
      console.log(state);
      state.name = payload;
    },
    updateName(state) {
      state.name = "wangwu"
    }
  },

  //getters不管定义在哪里都是一样的调用方式，module里还可以再传入一个参数 --> 根的state
  getters: {
    fullname(state) {
      console.log(state);
      return state.name + "1111"
    },
    fullname2(state,getters) {
      return getters.fullname + "2222"
    },
    fullname3(state,getters,rootState) {
      return getters.fullname2 + rootState.index
    },
  },
  
  actions: {
    // 这里的context就不是指store了，而是指的当前module对象 ---> 包含根的概念
    updatename(context) {
      console.log(context);
      setTimeout(() => {
        context.commit("updateName")
      },1000)
    }
  },
  // 一般module里就不会再放module了
}

export default new Vuex.Store({
  // 保存状态（共享变量）
  state: {
    index: 0,
    students: [
      {name:"pbw",age:20},
      {name:"wcz",age:22},
      {name:"lc",age:21},
      {name:"hh",age:10},
    ],
    cat: {
      name: "波斯猫",
      weigth: 2,
      color: "red"
    }
  },

  // 保存方法：方法默认传入上面的state当参数,不需要使用this去得到
  mutations: {
    changename() {
      console.log("这是Vue.store里面的changename");
    },
    increment(state) {
      state.index++
    },
    decrement(state) {
      state.index--
    },

    // 传递payload（第二个参数）
    addcount(state,a) {
      state.index += a
    },
    // 可以是对象
    addstu(state,payload) {
      state.students.push(payload);
    },
    
    // mutations响应式规则  ---> 这些都无响应式
    changecat(state) {
      state.cat["height"] = 14
    },
    deletecat(state) {
      delete state.cat.color
    },

    // 同步和异步 --->  如果先执行后面的再执行前面的，那么前面的是可以获取先没有改变的数据的
    updatacat(state) {
      state.cat.color = "green"
    },
    // 异步操作，会让devtool无法监听
    updatacatIn(state) {
      // setTimeout(() => {
      //   state.cat.name = "aaaa"
      // }, 1000);

      // 解决办法：使用actions
      state.cat.name = "bbbb"
    },
  },

  // 保存异步操作，操作完了再由mutations操作
  actions: {
    // context:上下文 --> 1、指store(没有modules)
    aupdatacatIn(context,payload) {
      setTimeout(() => {
        context.commit("updatacatIn")
        console.log(payload.message.a)
        console.log(payload.message.b)
        payload.success()
      }, 1000);
    },

    aupdatacatIn2(context, payload) {
      return new Promise((resolve,reject) => {
        setTimeout(() => {
          context.commit("updatacatIn")
          console.log(payload)
          resolve("1111")
        }, 1000);
      })
    }
  },

  // 划分模块
  modules: {
    a:aModule
  },

  // 类似于计算属性
  getters: {
    powerindex(state) {
      const x = state.index;
      return x * x;
    },
    more20stu(state) {
      return state.students.filter(s => s.age > 20)
    },

    // 不仅可以传入state，还可以传入getters自己
    more20stuLength(state,getters) {
      return getters.more20stu.length
    },

    // 返回一个函数
    moreAgestu(state) {
      return function (age) {
        return state.students.filter(s => s.age > age)
      }
    }
  }
})
