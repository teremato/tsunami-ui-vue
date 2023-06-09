<template>
    <svg :class="customClass" xmlns="http://www.w3.org/2000/svg"
        :width="width" :height="height" 
        viewBox="0 0 24 23" fill="none"> 
        <path d="M2 9.5L10 19.5L22 2" 
            :stroke="stroke" stroke-width="4" 
            stroke-linecap="round"/>
    </svg>
</template>

<script setup lang="ts">
import type { IIconProps } from './model';
import { defaultIconProps } from './model';

withDefaults(defineProps<IIconProps>(), defaultIconProps);
</script>