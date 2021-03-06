import { createRouter, createWebHashHistory  } from 'vue-router'
import webLandingPage from "@/components/webLandingPage"
import webTeam from "@/components/webTeam.vue"
import webFinancial from "@/components/webFinancial.vue"
import webContact from "@/components/webContact.vue"
import webRealestate from "@/components/webRealestate.vue"
import webCars from "@/components/webCars.vue"
import webBusiness from "@/components/webBusiness.vue"
import mobileSwiper from "@/components/mobileSwiper.vue"
import imprint from "../components/imprint";

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
  {
    path: '/impressum',
    name: 'imprint',
    component: imprint
  },

]
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 };
  }
})

export default router
