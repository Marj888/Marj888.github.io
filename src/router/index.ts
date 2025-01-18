import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
// Import your components
import Portfolio from '../components/Portfolio.vue';

// Define your routes with types
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio,
  },
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL), // Vite's BASE_URL ensures correct path
  routes,
});

export default router;
