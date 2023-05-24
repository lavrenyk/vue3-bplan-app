import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('@/views/LandingView.vue')
  },
  {
    path: '/login',
    name: 'sign-in',
    meta: {layout: 'empty'},
    component: () => import('@/views/auth/SignInView.vue')
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    meta: {layout: 'main', auth: true},
    component: () => import('@/views/app/DashboardView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
