import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';

createApp(App)
  .use(router) // Use the router instance
  .mount('#app');
