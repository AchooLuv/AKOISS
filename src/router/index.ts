import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const Home = () => import('@/views/Home/Home.vue')
const NotFound = () => import('@/views/404/NotFound.vue')

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
  {
    path: '/404',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
