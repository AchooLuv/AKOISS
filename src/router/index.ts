import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/Home/Home.vue')

declare module 'vue-router' {
  interface RouteMeta {
    menu?: boolean
    title?: string
    icon?: string
    auth?: boolean
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
