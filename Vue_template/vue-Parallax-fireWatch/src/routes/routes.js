import {createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home.vue'

export default createRouter({

    history: createWebHashHistory(),

    routes: [
        {
            path: '/',
            component: Home
        }
    ]
})