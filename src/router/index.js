// import {createRouter, createWebHistory, RouterLink } from "vue-router";
import Motor from "../view/Motor.vue";
import Mobil from "../view/Mobil.vue";
import Kereta from "../view/Kereta.vue";
import Kapal from "../view/Kapal.vue";
import Pesawat from "../view/Pesawat.vue";
import Vue from "vue";
import Router from "vue-router";

Vue.use(Router)
const routes =[
    {
        path: "/",
        name: "home",
        component:Motor,

    },
    {
        path: "/about",
        name: "about",
        component: Mobil,

    },
    {
        path: "/detail",
        name: "detail",
        component: Kereta,

    },
    {
        path: "/product",
        name: "product",
        component: Kapal,

    },
    {
        path: "/contact",
        name: "contact",
        component: Pesawat,

    },
]
// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

const router = new Router({
    routes,
    mode: "history",
});

export default router;