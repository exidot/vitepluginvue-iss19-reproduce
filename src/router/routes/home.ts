import { RouteRecordRaw } from 'vue-router'
// import Page from '@/views/home/home-page.vue'

const route: RouteRecordRaw = {
  path: '/',
  component: () => import('@/layouts/default.vue'),    // src/router/routes/login.ts has a same imported. login.ts 有个相同导入
  children: [{
    path: '',
    name: 'home',
    component: () => import('@/views/home-page.vue'),  // lazy import happen iss19. 懒导入会发生 iss19
    // component: Page,                                // direct import not happen iss19. 直接导入不会发生 iss19
                                                       // a solution: Do not use the same custom component directly in multiple lazy loaded components
                                                       // 一个解决方案: 不同懒加载的组件中尽量不直接使用相同的自定义组件.
  }]
}

export default route
