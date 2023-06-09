<template>
    <button @click="emit('click')" :type="type" 
        :disabled="disabled"
        :class="['btn',
            `btn__${color}`,
            `btn__${size}`,
            { 'btn__rounded': rounded },
            { 'btn__outline':  outline},
            { 'btn__block': block }
        ]">
        <slot>{{ label }}</slot>
    </button>
</template>

<script setup lang="ts">
import type { IButtonProps } from './model';


withDefaults(defineProps<IButtonProps>(), {
    type: 'button',
    color: 'primary',
    size: 'normal',
    rounded: false,
    outline: false,
    disabled: false,
    block: false,
    label: '',
});
const emit = defineEmits<{
    (event: 'click'): void
}>()

</script>

<style lang="scss" scoped src="./index.scss">

</style>