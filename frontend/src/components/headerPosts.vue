<template>
  <div>
    <header class="header-posts">
      <img class="logo-header-log" src="../assets\banner-groupomania.png" />
      <nav>
        <router-link :to="{ name: 'posts'}">Home</router-link>
        <router-link :to="{ name: 'account', params: { token_user: token_user }}">My account</router-link>
        <router-link :to="{ name: 'myPosts', params: { token_user: token_user }}">My posts</router-link>
        <a class="disconnect" href="#" v-on:click="disconnect">Log out</a>
      </nav>
    </header>
  </div>
</template>

<script>
const tokenUser = sessionStorage.getItem('tokenUser')

export default {
  name: 'headerPosts',
  data () {
    return {
      tokenUser
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