import type { RouteLocationRaw } from "vue-router";


/** helopers function for routing */
export const view = (view: string, params = {}, query = {}): RouteLocationRaw => {
    const route = Object.assign({
        name: view
    }, params, query);

    return route;
}