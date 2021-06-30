export default {
  segments(campaignId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: {campaignId}, message: 'Segment test resp'})
      }, 2000)
    })
  }
}
