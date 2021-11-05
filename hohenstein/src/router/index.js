import { createRouter, createWebHistory } from 'vue-router'
import webLandingPage from "@/components/webLandingPage"
import webTeam from "@/components/webTeam.vue"
import webFinancial from "@/components/webFinancial.vue"
import webContact from "@/components/webContact.vue"
import webRealestate from "@/components/webRealestate.vue"
import webCars from "@/components/webCars.vue"
import webBusiness from "@/components/webBusiness.vue"
import mobileSwiper from "@/components/mobileSwiper.vue"

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
  {
    path: '/real-estate',
    name: 'realEstate',
    component: webRealestate
  },
  {
    path: '/cars',
    name: 'Cars',
    component: webCars
  },
  {
    path: '/business-consulting',
    name: 'BusinessConsulting',
    component: webBusiness
  },
  {
    path: '/demo',
    name: 'demo',
    component: mobileSwiper
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
