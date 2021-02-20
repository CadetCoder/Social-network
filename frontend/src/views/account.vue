<template>
  <div class="container">
    <headerPosts />
    <div class="profile">
      <h1>Profile</h1>
    </div>

    <div v-for="user in users" :key="user.id" class="user-details">
      <div class="container-profile">
        <div class="header-profile">
          <p v-if="edit" class="input">
            Enter your first name :
            <input class="input" required v-model="first_name" />
          </p>
          <p v-else class="user-first_name">First name : {{ user.first_name }}</p>

          <p v-if="edit" class="input">
            Enter your last name :
            <input class="input" required v-model="last_name" />
          </p>
          <p v-else class="user-last_name">Last name : {{ user.last_name }}</p>

          <p v-if="edit" class="input">
            Enter your email address :
            <input class="input" required v-model="email" />
          </p>
          <p v-else class="user-email">Email : {{ user.email }}</p>

          <p v-if="edit" class="input">
            Enter  your password :
            <input type="password" class="input" required v-model="password" />
          </p>
          <p v-else class="user-password">Password : ********</p>

          <div class="button-profile">
            <button v-if="edit" @click="edit = false">Discard changes</button>
            <button v-else @click="edit = true">Edit</button>
            <button v-if="edit" v-on:click="updateDetails">Save</button>
            <button v-else v-on:click="deleteUser">Delete account</button>
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
  name: 'account',
  data: () => {
    return {
      users: [],
      edit: false,
      first_name: '',
      last_name: '',
      email: '',
      password: ''
    }
  },
  components: {
    headerPosts
  },
  methods: {
    deleteUser () {
      this.$axios
        .delete(`http://localhost:3000/api/auth/delete/${userToken}`, {},
        { Headers: { Authorization: 'Bearer ' + tokenUser } })
        .then((response) => {
          console.log(response)
          sessionStorage.removeItem('token')
          sessionStorage.removeItem('userToken')
          location.href = '/'
        })
        .catch((error) => {
          console.log(error)
        })
    },
    updateDetails () {
      this.$axios
        .put(`http://localhost:3000/api/auth/update/${userToken}`, {},
        { Headers: { Authorization: 'Bearer ' + tokenUser } }, {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          password: this.password
        })
        .then((response) => {
          console.log(response)
          location.href = `/account/${tokenUser}`
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  beforeMount () {
    this.$axios
      .get(`http://localhost:3000/api/auth/profile/${userToken}`, {},
        { Headers: { Authorization: 'Bearer ' + tokenUser } })
      .then((response) => (this.users = response.data.result))
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style>
@import '../style.css';
</style>