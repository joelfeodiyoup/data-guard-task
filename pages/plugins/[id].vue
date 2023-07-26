<script setup lang="ts">
const tabGroup = useTabFromRoute(useRoute());
const {pluginsForTab} = usePluginsForTab(tabGroup);

    /**
     * Utility just to remove an item from an array.
     * This is used when making active/inactive a plugin on a 'tab'
     * e.g. removing an item from tab.active.
     * @param arr 
     * @param value 
     */
    function removeItem<T>(arr: Array<T>, value: T): Array<T> { 
        const index = arr.indexOf(value);
        if (index > -1) {
            arr.splice(index, 1);
        }
        return arr;
    }

    const handlePluginUpdate = (newValue: boolean, key: string) => {
        // an inactive plugin became active
        if (!!newValue) {
            tabGroup.active.push(key);
            removeItem(tabGroup.inactive, key);
        } else {
            tabGroup.inactive.push(key);
            removeItem(tabGroup.active, key);
        }

        /**
         * This post request has an issue that I haven't been able to fix.
         * On first clicking 'activate/inactivate' it'll make one post request,
         * then 2, 3, 4, each additional click.
         * I think it's to do with keys. I'm not really sure.
         */
        useFetch(`/api/tab/${tabGroup.title}`,
            {method: 'post', body: tabGroup }
        );
    }

</script>
<template>
    <h2 class="page-title">{{ tabGroup.title }} Plugins</h2>
    <section class="grid">
        <Plugin
            v-for="[key, plugin] in pluginsForTab"
            :key="plugin.title"
            :plugin="plugin"
            @update:pluginActiveStateChanged="newValue => {
                handlePluginUpdate(newValue, key);
            }"
        ></Plugin>
        
    </section>
</template>