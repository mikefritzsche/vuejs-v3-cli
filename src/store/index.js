import { createLogger, createStore } from 'vuex'
import Api from '@/api'

export default createStore({
  plugins: process.env.NODE_ENV === 'development' ? [createLogger()] : [],
  state: {
    api: new Api()
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
