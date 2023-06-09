import type { RouteRecordRaw } from "vue-router";


/** names app-routes alias */
export const HOME_ROUTE = 'view:home';
export const BUTTONS_ROUTE = 'view:buttons';
export const CHECBOXES_ROUTE = 'view:checkboxes';

/** router-alias */

export const routerAlias: RouteRecordRaw[] = [
    {
        name: HOME_ROUTE,
        path: '/',
        component: () => import('@/app/views/home/home-view.vue')
    },
    {
        name: BUTTONS_ROUTE,
        path: '/buttons',
        component: () => import('@/app/views/buttons/buttons-view.vue')        
    },
    {
        name: CHECBOXES_ROUTE,
        path: '/checkboxes',
        component: () => import('@/app/views/checkboxes/checkboxes-view.vue')
    }
]