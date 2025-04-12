import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
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
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },    
  ],
})

export default router
