<template>
    <div class="app__view">
        <!--TODO: Change page, but so far -->
        <section>
            <h1 class="title">Select</h1>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Basic select</h3>
            <p class="text">Select has a three state: 
                <span class="text-primary">default, succes, warning</span>
            </p>
            <div class="app__view-section-inline">
                <tsu-select v-model="model"
                    placeholder="Выберите юзера"
                    :reduce="(item) => item.name" 
                    :options="arr"/>
                <tsu-select v-model="model"
                    state="success"
                    placeholder="Выберите юзера"
                    :reduce="(item) => item.name" 
                    :options="arr"/>
                <tsu-select v-model="model"
                    state="warning"
                    placeholder="Выберите юзера"
                    :reduce="(item) => item.name" 
                    :options="arr"/>
            </div>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Search select</h3>
            <p class="text">Select has a three state: 
                <span class="text-primary">default, succes, warning</span>
            </p>
            <div class="app__view-section-inline">
                <tsu-select v-model="model"
                    searchable
                    placeholder="Выберите юзера"
                    :reduce="(item) => item.name" 
                    :options="arr"/>
                <tsu-select v-model="model"
                    searchable
                    state="success"
                    placeholder="Выберите юзера"
                    :reduce="(item) => item.name" 
                    :options="arr"/>
                <tsu-select v-model="model"
                    searchable
                    state="warning"
                    placeholder="Выберите юзера"
                    :reduce="(item) => item.name" 
                    :options="arr"/>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { tsuSelect } from '@/tsunami@UI/components';
import { ref } from 'vue';

const model = ref<{ key: number, name: string }>();

const arr: { key: number, name: string }[] = [
    { key: 1, name: 'anton'},
    { key: 2, name: 'jeka' },
    { key: 3, name: 'sany' },
    { key: 1, name: 'anton'},
    { key: 2, name: 'jeka' },
    { key: 3, name: 'sany' },
    { key: 1, name: 'anton'},
    { key: 2, name: 'jeka' },
    { key: 3, name: 'sany' },
];

</script>

<style scoped>

</style>