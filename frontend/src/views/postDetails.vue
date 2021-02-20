/* eslint-disable camelcase */
<template>
  <div>
    <headerPosts />
    <div v-for="post in posts" :key="post.id" class="post-comments">
      <div class="container-post">
        <div class="header-post">
          <div class="user-id">{{ post.first_name + " " + post.last_name }}</div>
          <div class="time-post">{{ post.post_create }}</div>
          <div class="time-post">{{ post.id }}</div>
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
          </div>
        </div>
      </div>
      <comments
        v-bind:post_id="post.id"
        v-bind:first_name="post.first_name"
        v-bind:last_name="post.last_name"
      />
    </div>
  </div>
</template>

<script>
import headerPosts from '@/components/headerPosts.vue'
import comments from '@/components/comments.vue'
const tokenUser = sessionStorage.getItem('tokenUser')

export default {
  name: 'postDetails',
  data: () => {
    return {
      posts: [],
      post_id: '',
      token_user: tokenUser
    }
  },
  components: {
    headerPosts,
    comments
  },
  methods: {
    // eslint-disable-next-line camelcase
    like (id_post) {
      this.$axios
        // eslint-disable-next-line camelcase
        .post(`http://localhost:3000/api/posts/${id_post}/like`, {
          token_user: this.tokenUser
        })
        .then((response) => {
          location.reload()
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // eslint-disable-next-line camelcase
    dislike (id_post) {
      this.$axios
        // eslint-disable-next-line camelcase
        .post(`http://localhost:3000/api/posts/${id_post}/dislike`, {
          tokenUser: this.tokenUser
        })
        .then((response) => {
          location.reload()
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // eslint-disable-next-line camelcase
    postDetails (id_post) {
      this.$router.push({
        // eslint-disable-next-line camelcase
        path: `/postDetails/${id_post}`
      })
    }
  },
  beforeMount () {
    this.$axios
      .get(`http://localhost:3000/api/posts/${this.id_post}`, {},
        { Headers: { Authorization: 'Bearer ' + tokenUser } })
      .then((response) => {
        this.posts = response.data.result
      })
      .catch((error) => {
        console.log(error)
      })
  },
  created () {
    this.post_id = this.$route.params.post_id
  }
}
</script>

<style>
@import "../style.css";
</style>