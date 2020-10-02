import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VuePwaInstallPlugin from 'vue-pwa-install'

Vue.use(VueRouter, VueAxios, axios, VuePwaInstallPlugin)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/register',
    name: 'register',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/log-in',
    name: 'login',
    component: () => import(/* webpackChunkName: "LogIn" */'../views/LogIn.vue')
  },
  {
    path: '/feeds',
    name: 'feeds',
    component: () => import('../views/Feeds.vue')
  },
  {
    path: '/new-post',
    name: 'newpost',
    component: () => import('../views/NewPost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
