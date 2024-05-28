// Importation des fonctions nécessaires de vue-router
import { createRouter, createWebHistory } from 'vue-router'
// Importation des composants de page
import Home from '../views/HomePage.vue'
import Note from '../views/NotePage.vue'

// Définition des routes de l'application
const routes = [
  {
    path: '/', // home page
    name: 'HomePage',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
