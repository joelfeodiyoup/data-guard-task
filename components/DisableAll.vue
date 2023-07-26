<script setup lang="ts">
    const allDisabled = useDisableAllPlugins();
</script>
<template>
    <p :class="`linear-gradient ${allDisabled ? 'disabled' : 'enabled'}`">
        All plugins {{ allDisabled ? 'disabled' : 'enabled' }}
        <Checkbox
           :modelValue="allDisabled ? false : true"
            @update:modelValue="newValue => {
                allDisabled = !newValue}"
        >
            <Icon name="eos-icons:node-outlined" />
        </Checkbox>
    </p>
</template>