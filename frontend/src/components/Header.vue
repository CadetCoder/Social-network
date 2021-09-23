<template>
  <nav>
    <!-- Start of app toolbar -->
    <v-app-bar app dark>
      <v-toolbar-title class="headline text-uppercase">
        <router-link to="/">
          <v-img
            alt="Groupomania Logo"
            class="shrink mr-2"
            contain
            to="/"
            :src="require('../assets/icon-left-font-monochrome-white.png')"
            transition="scale-transition"
            width="250"
          />
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-if="isLogged === true"
        x-small
        link
        aria-label="feeds"
        class="input-group--focused"
        to="/posts"
        >News feed</v-btn
      >
      <v-btn
        v-if="isLogged === false"
        x-small
        aria-label="Login"
        class="input-group--focused"
        to="/login"
        >Login</v-btn
      >
      <v-btn
        v-if="isLogged === false"
        x-small
        aria-label="Signup"
        class="input-group--focused"
        to="/signup"
        >Register</v-btn
      >

      <v-btn
        v-if="isLogged === true"
        aria-label="profile"
        :to="`/account/${user.id}`"
        icon
        small
        class="input-group--focused mr-4"
        ><v-avatar>
          <img  v-if="user.photo"
            alt="Avatar"
            :src="user.photo"
            class="photo-header">
          <v-icon v-if="user.photo === null"  :color="isLoggedIn" size="35px" class="like-btn">$vuetify.icons.account</v-icon>
        </v-avatar>
       </v-btn
      >
       <v-btn
        v-if="isLogged == true"
        aria-label="Members"
        to="/accounts"
        icon
        small
        class="input-group--focused mr-4"
        ><v-avatar>
          <v-icon size="35px">$vuetify.icons.friends</v-icon>
        </v-avatar></v-btn
      >
    </v-app-bar>
  </nav>
</template>
<script>
export default {
  name: 'PageHeader',
  props: {
    user: {
      type: Object
    }
  },
  data () {
    return {}
  },
  computed: {
    isLogged () {
      return this.$store.getters.isLogged
    },
    isLoggedIn () {
      if (this.$store.state.isLoggedIn) {
        return 'pink'
      } else {
        return ''
      }
    }

  },
  methods: {
    getProfile (id) {
      this.$router.push(`/account/${id}`)
    }
  }
}
</script>
<style lang="scss" scoped>
.v-btn {
  margin-left: 20px;
}
</style>
