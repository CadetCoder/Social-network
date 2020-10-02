<template>
  <v-main>
    <v-app-bar secondary dark>
      <v-toolbar-title
      text>
        <router-link
          :to="{name: 'home'}">
          Groupomania</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn text rounded to="/register">Sign Up</v-btn>
        <v-btn text rounded to="/log-in">Log In</v-btn>
      </v-toolbar-items>
    </v-app-bar>
      <slot/>
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
      <v-card-title class="primary">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <!-- <v-btn @click="toggleLogIn">
          {{ isAuthenticated ? "Log out" : "Log in" }}
        </v-btn> -->
        <v-btn
          v-for= "icon in icons"
          :key="icon.href"
          class="mx-4"
          :href="icon.href"
          target="_blank"
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
  </v-main>
</template>

<script>
  export default {
    data: () => ({
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
    }),
    methods: {
      //
    },
    computed: {
      //
    }
  }
</script>