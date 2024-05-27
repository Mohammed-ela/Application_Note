import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NoteView from '../views/NoteView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/note/:id', name: 'Note', component: NoteView }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
