import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/diensten',
      name: 'diensten',
      component: () => import('../views/DienstenView.vue'),
    },
    {
      path: '/over-ons',
      name: 'over',
      component: () => import('../views/OverView.vue'),
    },
    {
      path: '/prijzen',
      name: 'prijzen',
      component: () => import('../views/PrijzenView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
});

export default router;
