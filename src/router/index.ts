import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import home from './routes/home'
import login from './routes/login'

const routes: RouteRecordRaw[] = [
  home,
  login,
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
