<template>
  <div class="container">
    <headerPosts />
    <div class="profile">
      <h1>My posts</h1>
    </div>
    <div v-for="post in posts" :key="post.id" class="post-comments">
      <div class="container-post">
        <div class="header-post">
          <div class="user-id">{{ post.first_name + " " + post.last_name }}</div>
          <div class="time-post">{{ post.post_create }}</div>
        </div>
        <div>
          <img class="image-post" v-bind:src="post.imageUrl" title="post-img" />
        </div>
        <div class="post-content">
          <div>{{ post.content }}</div>
          <div class="lik-dis-com">
            <div @click="like(post.id)" class="like-comments">
              <button class="like">
                <i class="fas fa-thumbs-up">
                  <span>{{ post.likes_number }}</span>
                </i>
              </button>
            </div>
            <div @click="dislike(post.id)" class="like-comments">
              <button class="dislike">
                <i class="fas fa-thumbs-down">
                  <span>{{ post.dislikes_number }}</span>
                </i>
              </button>
            </div>
            <button @click="postDetails(post.id)" class="see-comments">
              <i class="fas fa-comments"></i>
            </button>
            <button
              v-if="shouldEditAndDeletePost(post)"
              @click="editPost(post.id)"
              class="see-comments"
            >
              <i class="fas fa-edit"></i>
            </button>
            <button
              v-if="shouldEditAndDeletePost(post)"
              @click="deletePost(post.id)"
              class="see-comments"
            >
              <i class="fas fa-trash-alt"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerPosts from '@/components/headerPosts.vue'
const tokenUser = sessionStorage.getItem('tokenUser')
const userToken = sessionStorage.getItem('token_user')

export default {
  name: 'postsID',
  props: {
    post_id: Number
  },
  data: () => {
    return {
      posts: [],
      token_user: tokenUser,
      currentUser: 0
    }
  },
  components: {
    headerPosts
  },
  beforeMount () {
    this.$axios
      .get(`http://localhost:3000/api/auth/getCurrentUser/${userToken}/`, {},
        { Headers: { Authorization: 'Bearer ' + tokenUser } })
      .then((response) => {
        this.currentUser = response.data.result
      })
      .catch((error) => {
        console.log(error)
      })
    this.$axios
      .get(`http://localhost:3000/api/posts/profile/${tokenUser}`, {},
        { Headers: { Authorization: 'Bearer ' + tokenUser } })
      .then((response) => {
        this.posts = response.data.result
      })
      .catch((error) => {
        console.log(error)
      })
  },
  methods: {
    shouldEditAndDeletePost (post) {
      return (
        post.token_user === tokenUser || this.currentUser[0].isAdmin === 1
      )
    },
    like (idPost) {
      this.$axios
        .post(`http://localhost:3000/api/posts/${idPost}/like`, {
          token_user: this.token_user
        })
        .then((response) => {
          location.reload()
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    dislike (idPost) {
      this.$axios
        .post(`http://localhost:3000/api/posts/${idPost}/dislike`, {
          token_user: this.token_user
        })
        .then((response) => {
          location.reload()
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    postDetails (idPost) {
      location.href = `/postDetails/${idPost}`
    },
    editPost (idPost) {
      window.location.href = `/updatePost/${tokenUser}/${idPost}`
    },
    deletePost (idPost) {
      this.$axios
        .delete(`http://localhost:3000/api/posts/${tokenUser}/${idPost}`)
        .then((response) => {
          console.log(response)
          location.href = `/myposts/${tokenUser}`
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style>
@import "../style.css";
</style>