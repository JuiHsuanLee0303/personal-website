// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import ResumePage from '@/views/ResumePage.vue'
import ProjectsPage from '@/views/ProjectsPage.vue'
import ContactPage from '@/views/ContactPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/resume',
    name: 'Resume',
    component: ResumePage
  },
  {
    path: '/projects',
    name: 'Projects',
    component: ProjectsPage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL || '/'),
  routes
})

export default router
