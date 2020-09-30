import axios from 'axios'
import router from '../../router'

const state = {
  posts: [],
  addPostStatus: null,
  updatePostStatus: null
}

const getters = {
  allPosts: (state) => state.posts,
  addPostStatus: (state) => state.addPostStatus,
  updatePostStatus: (state) => state.updatePostStatus
}

const actions = {
  async loadPosts ({ commit }) {
    try {
      if (!localStorage.getItem('token')) {
        router.push('/')
      }
      const response = await axios.get('http://localhost:3000/api/posts/', {
 headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
})
      commit('SET_POSTS', response.data)
      localStorage.setItem('posts', JSON.stringify(response.data))
    } catch (err) {
      console.log(err)
    }
  },
  async addPost ({ commit }, fd) {
    try {
      const response = await axios.post('http://localhost:3000/api/posts/', fd, {
 headers: {
        authorization: 'Bearer ' + localStorage.getItem('token')
      }
})
      commit('ADD_POST', response.data)
      commit('ADD_POST_STATUS', true)
    } catch (err) {
      console.log(err)
      commit('ADD_POST_STATUS', false)
    }
  },
  async deletePost ({ commit }, id) {
    try {
      await axios.delete(
        `http://localhost:3000/api/posts/${id}`, {
 headers: {
          authorization: 'Bearer ' + localStorage.getItem('token')
        }
})
      commit('DELETE_POST', id)
      router.push('/home')
    } catch (err) {
      console.log(err)
    }
  },
  async updatePost ({ commit }, formData) {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/posts/${formData.get('id')}`, formData, {
 headers: {
          authorization: 'Bearer ' + localStorage.getItem('token')
        }
})
      commit('UPDATE_POST', response.data)
      commit('UPDATE_POST_STATUS', true)
    } catch (err) {
      console.log(err)
      commit('UPDATE_POST_STATUS', false)
    }
  },
  async viewPost ({ commit }, data) {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/posts/${data.id}/view-post`, data, {
 headers: {
          authorization: 'Bearer ' + localStorage.getItem('token')
        }
})
      commit('UPDATE_POST', response.data)
    } catch (err) {
      console.log(err)
    }
  },
  async onUserLiked ({ commit }, data) {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/posts/${data.id}/userLiked`, data, {
 headers: {
          authorization: 'Bearer ' + localStorage.getItem('token')
        }
})
      commit('UPDATE_POST', response.data)
    } catch (err) {
      console.log(err)
    }
  },
  async onUserDisliked ({ commit }, data) {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/posts/${data.id}/userDisliked`, data, {
 headers: {
          authorization: 'Bearer ' + localStorage.getItem('token')
        }
})
      commit('UPDATE_POST', response.data)
    } catch (err) {
      console.log(err)
    }
  }
}

const mutations = {
  SET_POSTS: (state, posts) => (state.posts = posts),
  ADD_POST: (state, post) => (state.posts.unshift(post)),
  DELETE_POST: (state, id) =>
    (state.posts = state.posts.filter((post) => post.id !== id)),
  UPDATE_POST: (state, updatedPost) => {
    const index = state.posts.findIndex((post) => post.id === updatedPost.id)

    if (index !== -1) {
      state.posts.splice(index, 1, updatedPost)
    }
  },
  ADD_POST_STATUS: (state, boolean) => (state.addPostStatus = boolean),
  UPDATE_POST_STATUS: (state, boolean) => (state.updatePostStatus = boolean)
}

export default {
  state,
  getters,
  actions,
  mutations
}