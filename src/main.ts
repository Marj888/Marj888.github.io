import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/theme.css'
// import 'bootstrap'; // Optional: Include JS for Bootstrap components

loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .mount('#app')
