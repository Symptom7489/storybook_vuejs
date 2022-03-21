import { createApp } from 'vue'
import App from './App.vue'

import './assets/tailwind.css'

import store from './store/index.js';
import router from './router.js';

import BaseCard from '@/components/BaseCard';

const app = createApp(App)

app.use(router);
app.use(store);

app.component('base-card', BaseCard);



app.mount('#app');