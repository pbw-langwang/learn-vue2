export default {
  changename() {
    console.log("这是Vue.store里面的changename");
  },

  increment(state) {
    state.index++
  },
  decrement(state) {
    state.index--
  },
  addcount(state, a) {
    state.index += a
  },

  addstu(state, payload) {
    state.students.push(payload);
  },

  changecat(state) {
    state.cat["height"] = 14
  },
  deletecat(state) {
    delete state.cat.color
  },

  updatacat(state) {
    state.cat.color = "green"
  },
  updatacatIn(state) {
    state.cat.name = "bbbb"
  },
}