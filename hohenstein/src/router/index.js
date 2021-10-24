import { createRouter, createWebHistory } from 'vue-router'
import webLandingPage from "@/components/webLandingPage"
import webTeam from "@/components/webTeam.vue"
const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: webLandingPage
  },
  {
    path: '/team',
    name: 'Team',
    component: webTeam
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
