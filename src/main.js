import { createApp } from 'vue'
import BootstrapVueNext from 'bootstrap-vue-next'
import App from './App.vue'
import router from './router'
import store from './store'

// Styles import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'

import './assets/css/theme.css'
import './assets/css/user.css'



createApp(App)
    .use(store)
    .use(router)
    .use(BootstrapVueNext)
    .mount('#app')
