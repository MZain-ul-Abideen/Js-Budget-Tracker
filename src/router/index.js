import { createRouter, createWebHistory } from 'vue-router'
import main_app from '@/views/main_app.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main-app',
      component: main_app,
    },
  ],
})

export default router
