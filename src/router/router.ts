import { createRouter, createWebHistory } from "vue-router";
import tinhToanVue from "@/components/tinhToan.vue";
import HeaderVue from "@/components/Header.vue";

const routes = [
    {path: '/tinhToanVue', component: tinhToanVue},
    {path: '/HeaderVue', component: HeaderVue}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router