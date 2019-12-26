import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/characters',
    name: 'characters',
    component: () => import('../views/Characters.vue')
  },
  {
    path: '/characters/:id',
    name: 'character',
    component: () => import('../views/Character.vue')
  },
  {
    path: '/locations',
    name: 'locations',
    component: () => import('../views/Locations.vue')
  },
  {
    path: '/episodes',
    name: 'episodes',
    component: () => import('../views/Episodes.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
