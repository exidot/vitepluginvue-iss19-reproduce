import { RouteRecordRaw } from 'vue-router'


const route: RouteRecordRaw = {
  path: '/login',
  component: () => import('@/layouts/default.vue'),
  children: [{
    path: '',
    name: 'login',
    component: () => import('@/views/login-page.vue'),
  }],
}

export default route
