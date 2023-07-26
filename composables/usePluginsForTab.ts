import { Tab } from "./useTabs";
export type PluginViewModel = {
    title: string,
    description: string,
    disabled: boolean,
    active: boolean,
}

/**
 * Each page/tab needs a different set of plugins.
 * Given a tab, this will return the plugins that should appear on it.
 * Also, provides them in a view model, to indicate if they should be active/disabled/inactive
 * (this actually comes from the tab object. i.e. doesn't exist on the individual plugin types)
 * @param route 
 * @returns 
 */
export const usePluginsForTab = (route: Tab) => {
    const {plugins} = usePlugins();

    const active = new Set(route.active);
    const disabled = new Set(route.disabled);
    const inactive = new Set(route.inactive);
    const all = new Set([...active, ...disabled, ...inactive]);

    // do one iteration across all plugins,
    // to find out which ones appear on this tab.
    const pluginsForTab = Array.from(plugins).reduce((pluginsForTab, current) => {
        // if it's either active, disabled, or inactive, then it should appear
        if (all.has(current[0])) {
            // build up a view model for this plugin, using the active/disabled/inactive sets.
            const p: PluginViewModel = {
                ...current[1],
                disabled: disabled.has(current[0]),
                active: active.has(current[0]),
            };
            pluginsForTab.set(current[0], p);
        }
        return pluginsForTab;
    }, new Map() as Map<string, PluginViewModel>)
    return {pluginsForTab};
}