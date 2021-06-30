import account from './account'

const apiKey = function() {
  return account({
    url: '/'
  })
}
const apiKeys = function() {
  return account({
    url: '/'
  })
}
const appAccountApiKey = function() {
  return account({
    url: '/'
  })
}
export default {
  apiKey,
  apiKeys,
  appAccountApiKey
}
