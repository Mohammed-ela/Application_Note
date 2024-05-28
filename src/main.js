import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import '@fortawesome/fontawesome-free/css/all.css' // Importation des styles de Font Awesome

createApp(App).use(router).mount('#app')
