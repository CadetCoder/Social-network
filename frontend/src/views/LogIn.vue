<template>
  <div>
    <headerLog />
    <div id="wrapper">
      <div class="main-content">
        <div class="header">
          <img src="../assets\icon-above-font.png" />
        </div>
        <form class method="post" v-on:submit.prevent="postNow">
          <div class="overlap-text">
            <input
              id="email"
              type="email"
              name
              value
              v-model="email"
              placeholder="E-mail"
              class="input-1"
            />
            <input
              id="password"
              type="password"
              name
              value
              v-model="password"
              placeholder="Password"
              class="input-2"
            />
          </div>
          <button type="submit" name="button" class="btn">Log In</button>
        </form>
      </div>
      <div class="sub-content">
        <div class="s-part">
          Don't have an account?
          <router-link to="signup">Sign up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerLog from '@/components/headerLog.vue'
export default {
  name: 'login',
  components: {
    headerLog
  },
  data () {
    return {
      email: '',
      password: '',
      userId: '',
      tokenUser: ''
    }
  },
  methods: {
    postNow () {
      this.$axios
        .post('http://localhost:3000/api/auth/login', {
          email: this.email,
          password: this.password,
          id: this.userId,
          tokenUser: this.tokenUser
        })
        .then((response) => {
          console.log(response)
          sessionStorage.setItem('tokenUser', response.data.tokenUser)
          sessionStorage.setItem('token', response.data.token)
          this.$axios.defaults.headers.common.Authorization =
            'Bearer ' + response.data.token
          location.href = '/posts'
        })
        .catch((error) => {
          if (error.response.status === 401) {
            this.message = 'Invalid username or password!'
          }
          if (error.response.status === 500) {
            this.message = 'Server error'
          }
          sessionStorage.removeItem('token')
        })
    }
  }
}
</script>

<style>
@import '../style.css';
</style>