<script setup lang="ts">
const tabGroup = useTabFromRoute(useRoute());
const {pluginsForTab} = usePluginsForTab(tabGroup);
</script>
<template>
    <h2 class="page-title">Personnel Plugins</h2>
    <section class="grid">
        <Plugin
            v-for="[key, plugin] in pluginsForTab"
            :key="plugin.title"
            :plugin="plugin"
            @update:pluginActiveStateChanged="newValue => {

            }"
        ></Plugin>
        
    </section>
</template>