import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentPost: '',
    allPosts: []
  },
  mutations: {
    setCurrentPost (state, payload) {
      state.currentPost = payload
      state.allPosts.push(payload)
    }
  },
  actions: {
  },
  modules: {
  },
  getter: {
    getcurrentPost: state => state.currentPost
  }
})
