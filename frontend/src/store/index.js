import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPost: '',
    allPosts: [],
    authenticated: false
  },
  mutations: {
    setCurrentPost (state, payload) {
      state.currentPost = payload
      state.allPosts.push(payload)
    },
    setAuthentication (state, payload) {
      state.authenticated = payload
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getCurrentPost: state => state.currentPost,
    isAuthenticated: state => state.authenticated
  }
})
