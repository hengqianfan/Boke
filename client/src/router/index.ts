import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    component: () => import('@/pages/home.vue'),
    name: 'home',
  },
  {
    path: '/post/:slug',
    component: () => import('@/components/MainDoc/index.vue'),
    props: true,
    name: 'postDetail'

  },
  {
    path: '/about',
    component: () => import('@/pages/home.vue'),
    meta: { title: "" }
  },
  {
    path: '/sites',
    component: () => import('@/pages/Sites.vue')
  },
  {
    path: '/notes',
    component: () => import('@/pages/Notes.vue')
  },
  {
    path: '/notes/:top/:sub*',
    component: () => import('@/components/MainDoc/index.vue'),
    props: true
  }

]

export default createRouter({

  // 一定要加上 BASE_URL，否则部署到非根路径时会出错

  history: createWebHistory(import.meta.env.BASE_URL),

  routes
})
