export default {
  powerindex(state) {
    const x = state.index;
    return x * x;
  },
  more20stu(state) {
    return state.students.filter(s => s.age > 20)
  },

  more20stuLength(state, getters) {
    return getters.more20stu.length
  },

  moreAgestu(state) {
    return function (age) {
      return state.students.filter(s => s.age > age)
    }
  }
}