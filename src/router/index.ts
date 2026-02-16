import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'StreamRAG - Real-time Code Intelligence'
    }
  },
  {
    path: '/docs',
    name: 'docs',
    component: () => import('@/views/Docs.vue'),
    meta: {
      title: 'Documentation - StreamRAG'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFound.vue'),
    meta: {
      title: '404 - Page Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

// Update page title
router.beforeEach((to, _from, next) => {
  document.title = (to.meta.title as string) || 'StreamRAG'
  next()
})

export default router
