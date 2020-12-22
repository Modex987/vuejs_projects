import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import store from './store'



/* The root component */
const app = createApp(App)

// Install the router instance as a plugin
app.use(router)

// Install the store instance as a plugin
app.use(store)

// Mount The App
app.mount('#app')
