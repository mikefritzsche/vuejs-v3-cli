export default {
  campaigns() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: 'Campaigns resp'})
      }, 2000)
    })
  }
}
