<script setup lang="ts">
    defineProps<{
        modelValue: boolean,
        disabled?: boolean
    }>();
    defineEmits<{
        (e: 'update:modelValue', value: boolean): void
    }>();

    const changeEvent = ($event: Event) => {
        const el = $event.target as HTMLInputElement;
        return Boolean(el.checked);
    }
</script>
<template>
    <label class="switch">
        <input
            :disabled="$props.disabled ?? false"
            type="checkbox"
            :checked="modelValue ?? false"
            @input="$emit('update:modelValue', changeEvent($event))"
        />
        <span class="slider"></span>
        <span class="slider-button"><slot /></span>
    </label>
</template>