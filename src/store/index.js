import { createLogger, createStore } from 'vuex'
import Api from '@/api'
export const state = {
  accountEntity: '',
  api: new Api(),
  appsLoaded: '',
  appSelectorBlacklist: '',
  errors: '',
  glitterKoch: '',
  networkApps: '',
  selectedApp: '',
  selectedAppObject: '',
  userPrivileges: '',
  userPrivilegesReady: ''
}
export const mutations = {}
export const actions = {}
export const modules = {}

export default createStore({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state,
  mutations,
  actions,
  modules
})
