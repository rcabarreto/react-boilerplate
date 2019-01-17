
export default {

  delay(timeout) {
    return new Promise(resolve => setTimeout(() => {
      resolve()
    }, timeout))
  },

  loadSomething() {
    return this.delay(5000)
  },

}
