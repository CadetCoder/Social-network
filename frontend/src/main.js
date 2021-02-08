import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import MicroModal from 'micromodal'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

axios.defaults.baseURL = 'http://localhost:3000/api/'
const token = sessionStorage.getItem('token')
if (token) {
  axios.defaults.headers.common.Authorization = 'Bearer ' + token
}
Vue.prototype.$axios = axios
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

MicroModal.init()