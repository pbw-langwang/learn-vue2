import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import mutations from "./mutations"
import getters from "./getters"
import actions from "./actions"
import AModule from "./module/moduleA"

export default new Vuex.Store({
  state: {
    index: 0,
    students: [
      { name: "pbw", age: 20 },
      { name: "wcz", age: 22 },
      { name: "lc", age: 21 },
      { name: "hh", age: 10 },
    ],
    cat: {
      name: "波斯猫",
      weigth: 2,
      color: "red"
    }
  },
  getters,
  mutations,
  actions,
  modules: {
    AModule
  }
})
