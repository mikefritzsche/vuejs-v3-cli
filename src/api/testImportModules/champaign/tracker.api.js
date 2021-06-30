export default {
  partnerOrgIds(partnerId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: {partnerId}, message: 'partnerOrgIds resp'})
      }, 2000)
    })
  },
  trackers() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: 'Trackers resp'})
      }, 2000)
    })
  }
}
