export default {
  campaigns(campaignId) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({data: {campaignId}, message: 'Campaigns resp'})
      }, 2000)
    })
  }
}
