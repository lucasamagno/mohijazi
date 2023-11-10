import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Work from '../components/Work.vue';

// Define your routes as before
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/work',
    name: 'Work',
    component: Work,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
});

export default router;
