import { createRouter, createWebHistory } from 'vue-router'
import webLandingPage from "@/components/webLandingPage"
import webTeam from "@/components/webTeam.vue"
import webFinancial from "@/components/webFinancial.vue"
import webContact from "@/components/webContact.vue"

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
  {
    path: '/finance',
    name: 'Finance',
    component: webFinancial
  },
  {
    path: '/contact',
    name: 'Contact',
    component: webContact
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
