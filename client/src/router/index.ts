import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/home.vue') },
  { path: '/post/:slug', component: () => import('@/pages/PostDetail.vue'), props: true },
  { path: '/about', component: () => import('@/pages/home.vue') }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
