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
    name: 'Home',
    component: Home
  },
  {
    path: '/SignUp',
    name: 'Sign Up',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUp.vue')
  },
  {
    path: '/LogIn',
    name: 'Log In',
    component: () => import('../views/LogIn.vue')
  },
  {
    path: '/Posts',
    name: 'Post',
    component: () => import('../views/Posts.vue')
  },
  {
    path: '/NewPost',
    name: 'New Post',
    component: () => import('../views/NewPost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
