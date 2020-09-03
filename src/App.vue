<template>
  <div id="app">
    <Navigation
      :nav-links="navLinks"
    />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
  components: {
    Navigation
  },
  data: () => ({
    navLinks: [
    {
      text: 'Home',
      path: '/',
      icon: 'ion-ios-home'
    },
    {
      text: 'Feed',
      path: '/feed',
      icon: 'ion-ios-home'
    },
    {
      text: 'Profile',
      path: '/feed',
      icon: 'ion-ios-home'
    }
    ]
  })
}
</script>

<style scoped>
@import 'https://unpkg.com/ionicons@4.2.2/dist/css/ionicons.min.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app .img-logo{
  max-width: 100%;
  height: auto;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
