<template>
  <v-app>
    <v-content>
      <v-toolbar dark>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn
            text
            v-for="menu in menus"
            :key="menu.name">
            {{ menu.name }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <router-view></router-view>
      <tiptap-vuetify v-model="content" :extensions="extensions"/>
      <v-footer
        dark
        fixed
      >
      <v-card
        class="flex"
        tile
      >
      <v-card-title class="blue-grey darken-3">
        <strong class="subheading">Get connected with us on social networks!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon.href"
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
import { TiptapVuetify, Heading, Bold, Italic, Strike, Underline, Code, Paragraph, BulletList, OrderedList, ListItem, Link, Blockquote, HardBreak, HorizontalRule, History } from 'tiptap-vuetify'

export default {
  name: 'App',
  components: {
    TiptapVuetify
  },
  data: () => ({
    title: 'Groupomania',
    menus: [
      {
        name: 'Home',
        route: 'Home'
      },
      {
        name: 'Signup',
        route: 'Signup'
      },
      {
        name: 'Log In',
        route: 'LogIn'
      }
    ],
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
    ],

    extensions: [
      History,
      Blockquote,
      Link,
      Underline,
      Strike,
      Italic,
      ListItem,
      BulletList,
      OrderedList,
      [Heading, {
        options: {
          levels: [1, 2, 3]
        }
      }],
      Bold,
      Code,
      HorizontalRule,
      Paragraph,
      HardBreak
    ],
    // starting editor's content
    content: `
      <h1>Yay Headlines!</h1>
      <p>All these <strong>cool tags</strong> are working now.</p>
    `
  })
}
</script>
