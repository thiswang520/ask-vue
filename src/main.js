import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import store from './store'
import './style/base.scss'

createApp(App).use(router).use(store).mount('#app')
