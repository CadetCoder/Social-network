<template>
  <div>
    <header class="header-posts">
      <img class="logo-header-log" src="../assets/banner-groupomania.png" alt="grouopomania banner"/>
      <nav>
        <router-link :to="{ name: 'posts'}">Home</router-link>
        <router-link :to="{ name: 'account', params: { userToken: userToken }}">My account</router-link>
        <router-link :to="{ name: 'myPosts', params: { userToken: userToken }}">My posts</router-link>
        <a class="disconnect" href="#" v-on:click="disconnect">Log out</a>
      </nav>
    </header>
  </div>
</template>

<script>
const tokenUser = sessionStorage.getItem('tokenUser')
const userToken = sessionStorage.getItem('token_user')

export default {
  name: 'headerPosts',
  data () {
    return {
      tokenUser,
      userToken
    }
  },
  methods: {
    disconnect () {
      sessionStorage.removeItem('token')
      sessionStorage.removeItem('tokenUser')
      location.href = '/'
    }
  }
}
</script>

<style>
@import '../style.css';
</style>