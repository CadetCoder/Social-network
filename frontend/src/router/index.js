import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VuePwaInstallPlugin from 'vue-pwa-install'
import vuetify from 'vuetify'
import login from '../views/login.vue'
import signup from '../views/signup.vue'
import posts from '../views/posts.vue'
import account from '../views/account.vue'
import myPosts from '../views/myPosts.vue'
import publish from '../views/publish.vue'
import postDetails from '../views/postDetails.vue'
import updatePost from '../views/updatePost.vue'

Vue.use(VueRouter, VueAxios, axios, VuePwaInstallPlugin, vuetify, login, signup, posts, account, myPosts, publish, postDetails, updatePost)

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
    path: '/myposts/:userToken',
    name: 'myPosts',
    component: () => import('../views/myPosts.vue')
  },
  {
    path: '/account/:userToken',
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
    path: '/updatePost/:userToken/:post_id',
    name: 'updatePost',
    component: () => import('../views/updatePost.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router