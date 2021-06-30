import account from './account'

const users = function() {
  return account({
    url: '/users'
  })
}
const associateUser = function() {
  return account({
    url: '/users'
  })
}
const disassociateUser = function() {
  return account({
    url: '/users'
  })
}
const getTosStatus = function() {
  return account({
    url: '/users'
  })
}
const saveTosTerms = function() {
  return account({
    url: '/users'
  })
}
const saveUser = function() {
  return account({
    url: '/users'
  })
}

export default {
  associateUser,
  disassociateUser,
  getTosStatus,
  saveTosTerms,
  saveUser,
  users
}
