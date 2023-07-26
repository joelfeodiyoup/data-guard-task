<script setup lang="ts">
    const {tabs} = useTabs();
    const route = useRoute();
    const isActiveRoute = (title: string) => {
        return route.params.id === title.toLowerCase();
    }
</script>
<template>
    <div class="layout">
        <aside>
            <h1 class="logo">Data<strong>Guard</strong></h1>
            <menu>
                <li
                    v-for="[ ,tab] in tabs"
                    :key="tab.title"
                    :class="`menu-item ${isActiveRoute(tab.title) ? 'active' : ''}`"
                >
                    <NuxtLink
                        :to="`/plugins/${tab.title.toLowerCase()}`"
                    >
                        <Icon :name="tab.icon" color="black" />
                        {{ tab.title }}
                    </NuxtLink>
                </li>
            </menu>
            <DisableAll></DisableAll>
        </aside>
        <main>
            <slot />
        </main>
    </div>
</template>