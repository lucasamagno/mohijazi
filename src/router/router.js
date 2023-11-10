import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Work from '../components/Work.vue';
import Education from '../components/Education.vue';

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
  {
    path: '/education',
    name: 'Education',
    component: Education,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), 
  routes,
});

export default router;
