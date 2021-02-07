import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VuePwaInstallPlugin from 'vue-pwa-install'

Vue.use(VueRouter, VueAxios, axios, VuePwaInstallPlugin)

const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/signup.vue')
  },
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/posts.vue')
  },
  {
    path: '/myposts/:tokenUser',
    name: 'myPosts',
    component: () => import('../views/myPosts.vue')
  },
  {
    path: '/account/:tokenUser',
    name: 'account',
    component: () => import('../views/account.vue')
  },
  {
    path: '/publish',
    name: 'publish',
    component: () => import('../views/publish.vue')
  },
  {
    path: '/postDetails/:post_id',
    name: 'postDetails',
    component: () => import('../views/postDetails.vue')
  },
  {
    path: '/updatePost/:tokenUser/:post_id',
    name: 'updatePost',
    component: () => import('../views/updatePost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router