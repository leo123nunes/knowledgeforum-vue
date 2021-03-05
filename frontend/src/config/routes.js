import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../components/home/Home'
import AdminPages from '../components/admin/AdminPages'

const routes = [
    {
        name: "Home",
        path: "/",
        component: Home
    },
    {
        name: "AdminPages",
        path: "/admin",
        component: AdminPages
    }
]

export default new VueRouter({
    mode: "history",
    routes
})