<template>
  <v-app>
    <v-content>
      <router-view></router-view>
      <v-footer
        dark
        padless
      >
      <v-card
        class="flex"
        flat
        tile
      >
      <v-card-title class="blue-grey darken-3">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
          :href="icon.href"
          target="_blank"
        >
          <v-icon size="24px">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="py-2 white--text text-center">
        {{ new Date().getFullYear() }} Groupomania — <strong>&#169; Darrel Toledo</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
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
  })
}
</script>
