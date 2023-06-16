import { createApp } from 'vue'
import BootstrapVueNext from 'bootstrap-vue-next'
import CKEditor from '@ckeditor/ckeditor5-vue'
import PerfectScrollbar from 'vue3-perfect-scrollbar'
import App from './App.vue'
import router from './router'
import store from './store'
import { auth } from '@/firebase'

// Styles import
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'
import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'

import './assets/css/theme.css'
import './assets/css/user.css'

// Check user auth in the app on loading
let app
if (auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)
    .use(store)
    .use(router)
    .use(BootstrapVueNext)
    .use(CKEditor)
    .use(PerfectScrollbar)
    .mount('#app')
  }
}));

