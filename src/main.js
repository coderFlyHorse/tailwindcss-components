import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import router from './router/index'
import {createPinia} from 'pinia'
const pinia = createPinia()
import "@/store/index"
createApp(App).use(pinia).use(router).mount('#app')





