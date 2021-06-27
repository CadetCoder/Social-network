import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'signup',
    component: () =>
      import (/* webpackChunkName: "Signup" */ '../components/Signup')
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import (/* webpackChunkName: "Login" */ '../components/Login')
  },
  {
    path: '/account/:id',
    name: 'account',
    component: () =>
      import (/* webpackChunkName: "Account" */ '../components/Account')
  },
  {
    path: '/posts',
    name: 'feed',
    component: () =>
      import (/* webpackChunkName: "Feed" */ '../views/Feed')
  },
  {
    path: '/hot',
    name: 'hotFeed',
    component: () =>
      import (/* webpackChunkName: "HotFeed" */ '../views/HotFeed')
  },
  {
    path: '/posts/:id',
    name: 'singlePost',
    component: () =>
      import (/* webpackChunkName: "SinglePost" */ '../comments/SinglePost')
  },
  {
    path: '/accounts',
    name: 'accounts',
    component: () =>
    import (/* webpackChunkName: "Accounts" */ '../components/Accounts')
  },

  {
    path: '/add',
    name: 'NewPost',
    component: () =>
      import (/* webpackChunkName: "NewPost" */ '../comments/NewPost')
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
