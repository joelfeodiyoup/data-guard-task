<script setup lang="ts">
    import { PluginViewModel } from "composables/usePluginsForTab";

    const props = defineProps<{
        plugin: PluginViewModel
    }>();
    const emit = defineEmits<{
        (e: 'update:pluginActiveStateChanged', value: boolean): void
    }>();

    // I'm setting some state here locally, to reference this instead of the props.
    // Better would be, when these values change, send them to the parent,
    // who then sends them back down as props.
    // But, the problem is, I'm setting the props through a Map in the parent.
    // These don't really get bound reactively properly. And the parent "sort of" doesn't need to know the changes of "active/inactive"
    // If I had a bit more time I'd do this a bit better.
    // I'm not too happy with how I've done this part.
    let pluginDisplay = useState(`plugin-${Math.random() * 1000}`, () => props.plugin);
</script>
<template>
    <section :class="`plugin`">
        <div>
            <h3>{{ pluginDisplay.title }}</h3>
            <p>{{ pluginDisplay.description }}</p>
        </div>
        <div>
            <Checkbox
                :modelValue="pluginDisplay.active ?? false"
                :disabled="pluginDisplay.disabled"
                @update:modelValue="newValue=> {

                }"
            ></Checkbox>
            <p :class="pluginDisplay.active ? 'success' : 'error'">
                {{  pluginDisplay.active ? 'Allowed' : 'Blocked' }}
            </p>
        </div>
    </section>
</template>