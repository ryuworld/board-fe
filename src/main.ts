import axios from 'axios';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

axios.defaults.baseURL = 'http://node.ryuworld.studio';

const app = createApp(App);
app.use(router);
app.mount('#app');
