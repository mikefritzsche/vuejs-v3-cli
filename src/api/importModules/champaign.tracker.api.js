export default {
  trackers(id) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: {id}, message: 'Trackers resp'})
      }, 2000)
    })
  },
  partnerOrgIds(partnerId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: {partnerId}, message: 'partnerOrgIds resp'})
      }, 2000)
    })
  }
}
