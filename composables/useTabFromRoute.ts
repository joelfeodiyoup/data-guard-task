import { RouteLocationNormalizedLoaded } from ".nuxt/vue-router";

/**
 * on each dynamic page to display tab plugins, need to get the Tab object.
 * I could possibly do it with routing middleware as well? maybe. To set state on route transitions.
 * 
 * The way implement here, is to take the string from the route,and find the Tab from that.
 * It feels, not quite the best. But does work.
 * 
 * Also, route needs to be passed in from the vue file.
 * @param route 
 * @returns 
 */
export const useTabFromRoute = (route: RouteLocationNormalizedLoaded) => {
    const id = computed(() => {
        const id = route.params?.id;
        return Array.isArray(id) ? id[0] : id;
    });
    const tab = useTab(id) || {
        title: '',
        icon: '',
        active: [],
        disabled: [],
        inactive: []
    };
    return tab;
}