<template>
    <div class="app-layout">
        <app-header/>
        <div class="app-content">
            <app-sidebar :is-open="isSidebarOpen"
                @sidebar-change="changeSidebar"/>
                <main :class="['view', (isSidebarOpen) ? 'view-open' : 'view-close']">
                    <router-view/>
                </main>
        </div>
    </div>
</template>

<script setup lang="ts">
import { AppSidebar, AppHeader } from '@/app/components';
import { ref } from 'vue';

const isSidebarOpen = ref<boolean>(true);

const changeSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value;
}

</script>

<style lang="scss">
@import '@/app/core/styles/normalize.scss';

.app-content {
    display: flex;
}

.view {
    transition: .3s;
    margin-top: 6rem;

    margin-bottom: 6rem;
}
.view-open {
    margin-left: 13rem;
}
.view-close {
    margin-left: 3rem;
}
</style>