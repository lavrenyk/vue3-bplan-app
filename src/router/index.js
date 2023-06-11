import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store';

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'main'},
    component: () => import('@/views/LandingView.vue')
  },

  // Auth section
  {
    path: '/login',
    name: 'sign-in',
    meta: {layout: 'empty'},
    component: () => import('@/views/auth/SignInView.vue')
  },
  {
    path: '/registration',
    name: 'sign-up',
    meta: {layout: 'empty'},
    component: () => import('@/views/auth/SignUpView.vue')
  },
  {
    path: '/verification',
    name: 'email-verification',
    meta: {layout: 'empty', auth: true},
    component: () => import('@/views/auth/SignUpEmailVerificationView.vue')
  },

  // Profile section
  {
    path: '/profile',
    name: 'profile-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/profile/ProfileView.vue'),
  },

  // BPlan setup section
  {
    path: '/projects',
    name: 'bplan-projects-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/projects/ProjectSetupView.vue'),
  },

  // Pitch section
  {
    path: '/pitch',
    name: 'pitch-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/pitch/PitchMainView.vue'),
  },

  // Plan section
  {
    path: '/plan',
    name: 'bplan-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/plan/PlanMainView.vue'),
  },
  {
    path: '/plan/outline',
    name: 'plan-outline-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/plan/PlanOutlineView.vue')
  },
  {
    path: '/plan/download',
    name: 'plan-download-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/plan/PlanDownloadView.vue')
  },

  // Finance section
  {
    path: '/finance',
    name: 'finance-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/finance/FinanceMainView.vue')
  },
  {
    path: '/finance/profit-and-loss',
    name: 'finance-PL-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/finance/FinancePLView.vue')
  },
  {
    path: '/finance/cash-flow',
    name: 'finance-cash-flow-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/finance/FinanceCashFlowView.vue')
  },
  {
    path: '/finance/balance',
    name: 'finance-balance-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/finance/FinanceBalanceView.vue')
  },

  // Milestones section
  {
    path: '/milestones',
    name: 'milestones-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/milestones/MilestonesMainView.vue')
  },

  // Dashboard section
  {
    path: '/dashboard',
    name: 'dashboard-page',
    meta: {layout: 'app', auth: true},
    component: () => import('@/views/app/dashboard/DashboardMainView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth)
  const userInfo = store.getters.getUserInfo;

  console.log("Hello from Router change!");

  if (requireAuth && !userInfo) {
    next('/login')
  } else {
    next()
  }
});

export default router
