import Vue from 'vue'
import Vuetify from 'vuetify'
import { TiptapVuetifyPlugin } from 'tiptap-vuetify'
import 'tiptap-vuetify/dist/main.css'
import 'vuetify/dist/vuetify.min.css'

const vuetify = new Vuetify()

Vue.use(Vuetify)
Vue.use(TiptapVuetifyPlugin, {
  // the next line is important! You need to provide the Vuetify Object to this place.
  vuetify, // same as "vuetify: vuetify"
  // optional, default to 'md' (default vuetify icons before v2.0.0)
  iconsGroup: 'mdi'
})

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: '#333333',
        secondary: '#BBBBBB',
        accent: '#CCCCCC',
        error: '#EF5350',
        bGrey: '#EEEEEE'
      }
    }
  }
})