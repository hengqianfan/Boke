import { createRouter, createWebHistory } from 'vue-router'




const routes = [
  {
    path: '/',
    component: () => import('@/pages/home.vue'),

  },
  { path: '/post/:slug', component: () => import('@/pages/PostDetail.vue'), props: true },
  {
    path: '/about',
    component: () => import('@/pages/home.vue'),
    meta: { title: "" }
  }
]

export default createRouter({
  // history: createWebHistory(),
  // 一定要加上 BASE_URL，否则部署到非根路径时会出错
  history: createWebHistory(import.meta.env.BASE_URL),

  routes
})
