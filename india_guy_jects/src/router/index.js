import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import Calender from '../views/Calender.vue'

const routes = [
  // {
  //   name: 'Home',
  //   path: '/',
  //   component: Home
  // },

  {
    name: 'Calender',
    path: '/calender',
    component: Calender
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
