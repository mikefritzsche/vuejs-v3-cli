export default {
  search() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('Analytics search() from the cli generated file')
      }, 2000)
    })
  }
}
