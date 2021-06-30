export default {
  trackers: function() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: 'Trackers resp'})
      }, 2000)
    })
  }
}
