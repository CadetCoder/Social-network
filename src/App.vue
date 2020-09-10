<template>
  <v-app>
    <v-toolbar color="#263238" dark>
      <v-toolbar-title text>{{ brand }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/SignUp">Sign Up</v-btn>
        <v-btn text to="/LogIn">Log In</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer
    dark
    fixed
    padless
    >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="blue-grey darken-1">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.href"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong> &#169; Darrel Toledo</strong>
      </v-card-text>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      brand: 'groupomania',
      icons: [
      {
        icon: 'mdi-facebook',
        href: 'https://facebook.com'
      },
      {
        icon: 'mdi-twitter',
        href: 'https://twitter.com'
      },
      {
        icon: 'mdi-linkedin',
        href: 'https://linkedin.com'
      },
      {
        icon: 'mdi-instagram',
        href: 'https://instagram.com'
      }
    ]
    })
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
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
