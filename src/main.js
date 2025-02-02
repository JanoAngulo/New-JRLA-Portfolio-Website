import './assets/input.css'
import { register } from 'swiper/element/bundle'

import { createApp } from 'vue'
import App from './App.vue'
register()
const app = createApp(App)
app.mount('#app')
