import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/routes.js'
import gsap from 'gsap'
import ScrollMagic from 'scrollmagic'


const app = createApp(App)


app.use(router).mount('#app')


//글로벌 프로퍼티
app.config.globalProperties.gsap = gsap
app.config.globalProperties.ScrollMagic = ScrollMagic