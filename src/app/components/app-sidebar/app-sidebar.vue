<template>
    <aside class="sidebar" :class="[{ 'close': !isOpen }]">
        <div class="sidebar__controller">
            <button @click="emit('sidebarChange')" class="sidebar__controller-btn">
                <img v-if="isOpen" src="@/tsunami@UI/__assets/icons/i_arrow-left.svg" alt="icon-close">
                <img v-else src="@/tsunami@UI/__assets/icons/i_burger-menu.svg" alt="icon-open">
            </button>
        </div>
        <nav class="sidebar__nav">
            <div v-for="field in sidebarFields" :key="field.name" 
                class="sidebar__nav-field" >
                <div class="sidebar__nav-field-name">
                    {{ field.name }}
                </div>
                <ul v-if="field.children.length"
                    class="sidebar__nav-field-nodes">
                    <li v-for="item in field.children" :key="item.link"
                        class="sidebar__nav-field-node">
                        <router-link :to="view(item.link)">
                            {{ item.name }}
                        </router-link>
                    </li>
                </ul>
            </div>
        </nav>
    </aside>
</template>

<script setup lang="ts">
import { view } from '@/app/views';
import { sidebarFields } from './model';
import type { ISidebarProps } from './model';


defineProps<ISidebarProps>();

const emit = defineEmits<{
    (e: 'sidebarChange'): void
}>();

</script>

<style scoped lang="scss" src="./index.scss">

</style>