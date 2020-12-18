import { createRouter, createWebHistory } from 'vue-router'
import store from '../store'

// import Home from '../views/Home.vue'
import Calender from '../views/Calender.vue'
import Markdown from '../views/Markdown.vue'
import Slider from '../views/Slider.vue'
import Calculator from '../views/Calculator.vue'
import Chat from '../views/Chat.vue'

const routes = [
  // {
  //   name: 'Home',
  //   path: '/',
  //   component: Home
  // },

  {
    name: 'Markdown',
    path: '/markdown',
    component: Markdown
  },

  {
    name: 'Calender',
    path: '/calender',
    component: Calender
  },
  
  {
    name: 'Slider',
    path: '/slider',
    component: Slider
  },  
  
  {
    name: 'Calculator',
    path: '/calculator',
    component: Calculator
  },  
  
  {
    name: 'Chat',
    path: '/chat',
    component: Chat
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from) => {
  return store.state.isUserLoggedIn
})

export default router
