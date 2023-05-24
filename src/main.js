import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles import
import './assets/css/theme.css'
import './assets/css/user.css'

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
