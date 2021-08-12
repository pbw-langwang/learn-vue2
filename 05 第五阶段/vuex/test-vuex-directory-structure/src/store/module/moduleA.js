export default {
    state: {
      name: "zhangsan"
    },

    mutations: {
      changename(state, payload) {
        console.log("这是aModule里面的changename");
        console.log(state);
        state.name = payload;
      },
      updateName(state) {
        state.name = "wangwu"
      }
    },

    getters: {
      fullname(state) {
        console.log(state);
        return state.name + "1111"
      },
      fullname2(state, getters) {
        return getters.fullname + "2222"
      },
      fullname3(state, getters, rootState) {
        return getters.fullname2 + rootState.index
      },
    },

    actions: {
      updatename(context) {
        console.log(context);
        setTimeout(() => {
          context.commit("updateName")
        }, 1000)
      }
    },
  }
