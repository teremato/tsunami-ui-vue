<template>
    <svg :class="customClass" :width="width" :height="height"
        viewBox="0 0 17 17" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle cx="8.5" cy="8.5" r="6.5"
            :fill="stroke" :stroke="stroke"
            stroke-width="4"/>
    </svg>
</template>

<script setup lang="ts">
import type { IIconProps } from './model';
import { defaultIconProps } from './model';

withDefaults(defineProps<IIconProps>(), defaultIconProps);
</script>

<style scoped>

</style>