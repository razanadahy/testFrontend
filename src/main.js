import { createApp } from 'vue'

import ElementPlus from 'element-plus'
import 'bootstrap/dist/css/bootstrap.css';
import 'element-plus/dist/index.css'
import '@fortawesome/fontawesome-free/css/all.css';
import App from './App.vue'
import router from "@/router";

const app = createApp(App);

app.use(ElementPlus);
app.use(router);
app.mount('#app');
