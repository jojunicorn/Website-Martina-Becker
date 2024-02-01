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
      },  
      {
        path: '/datenschutz',
        name: 'datenschutz',
        component: () => import('../views/legal/DatenschutzView.vue'),
      },  
      {
        path: '/impressum',
        name: 'impressum',
        component: () => import('../views/legal/ImpressumView.vue'),
      },  
      {
        path: '/disclaimer',
        name: 'disclaimer',
        component: () => import('../views/legal/DiscView.vue'),
      },  
      {
        path: '/therapieverfahren',
        name: 'therapieverfahren',
        component: () => import('../views/TherapieverfahrenView.vue'),
      },
      {
        path: '/akupunktur',
        name: 'akupunktur',
        component: () => import('../views/therapien/AkupunkturView.vue'),
      },  
      {
        path: '/eft',
        name: 'eft',
        component: () => import('../views/therapien/EFTView.vue'),
      },  
      {
        path: '/colon-hydro-therapy',
        name: 'colon-hydro-therapy',
        component: () => import('../views/therapien/CHTView.vue'),
      },    
      {
        path: '/anfahrt',
        name: 'anfahrt',
        component: () => import('../views/AnfahrtView.vue'),
      },        
      {
        path: '/kontakt',
        name: 'kontakt',
        component: () => import('../views/KontaktView.vue'),
      },  
      {
        path: '/preise',
        name: 'preise',
        component: () => import('../views/PreiseView.vue'),
      },  
    ],
});

export default router;

