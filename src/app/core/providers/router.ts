import { createRouter, createWebHistory } from "vue-router";
import routerAlias from '@/app/views';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routerAlias
})

export default router;