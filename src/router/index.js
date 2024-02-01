import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/HomeView.vue'),
      },
      {
        path: '/aboutMe',
        name: 'aboutMe',
        component: () => import('../views/AboutMeView.vue'),
      },  ],
});

export default router;

