<script setup lang="ts">
    const {tabs} = useTabs();
</script>
<template>
    <div class="layout">
        <aside>
            <h1 class="logo">Data<strong>Guard</strong></h1>
            <menu>
                <li
                    v-for="[ ,tab] in tabs"
                    :key="tab.title"
                    :class="`menu-item`"
                >
                    <NuxtLink
                        :to="`/plugins/${tab.title.toLowerCase()}`"
                    >
                        {{ tab.title }}
                    </NuxtLink>
                </li>
            </menu>
        </aside>
        <main>
            <slot />
        </main>
    </div>
</template>