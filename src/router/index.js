import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/player/:id',
    name: 'player',
    component: () => import(/* webpackChunkName: "about" */ '../views/PlayerView.vue')
  },
  {
    path: '/notfound',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
    meta: { title: "NotFound"}
  },
  {
    path: '/:path(.*)',
    name: 'notFound',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue'),
    meta: { title: "NotFound"}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
