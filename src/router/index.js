import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ColdHarborView from '../views/ColdHarborView.vue'
import DranesvilleView from '@/views/DranesvilleView.vue'
import AllentownView from '@/views/AllentownView.vue'
import SienaView from '@/views/SienaView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/allenstown',
      name: 'allenstown',
      component: AllentownView
    },
    {
      path: '/dranewsville',
      name: 'dranewsville',
      component: DranesvilleView
    },
    {
      path: '/siena',
      name: 'siena',
      component: SienaView
    },
    {
      path: '/cold-harbor',
      name: 'cold-harbor',
      component: ColdHarborView
    },
  ],
})

export default router
