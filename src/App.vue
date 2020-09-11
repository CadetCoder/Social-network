<template>
  <v-app>
    <DashboardLayout>
      <router-view />
    </DashboardLayout>
  </v-app>
</template>

<script>
import DashboardLayout from '../layouts/DashboardLayout'

export default {
  components: {
    DashboardLayout
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ECEFF1;
}

#nav {

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
