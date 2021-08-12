export default {
  aupdatacatIn(context, payload) {
    setTimeout(() => {
      context.commit("updatacatIn")
      console.log(payload.message.a)
      console.log(payload.message.b)
      payload.success()
    }, 1000);
  },

  aupdatacatIn2(context, payload) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        context.commit("updatacatIn")
        console.log(payload)
        resolve("1111")
      }, 1000);
    })
  }
}