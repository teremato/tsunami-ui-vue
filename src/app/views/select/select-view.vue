<template>
    <div class="app__view">
        <section>
            <h1 class="title">Select</h1>
        </section>
        <section>
            <h3 class="sub-title">Basic</h3>
            <section class="app__view-section">
                {{ model }}
                <tsu-select v-model="model" :options="arr"/>
            </section>
        </section>
    </div>
</template>

<script setup lang="ts">
import { tsuSelect } from '@/tsunami@UI/components';
import { ref } from 'vue';

const model = ref<{ key: number }>({key: 1});
const arr = [{key: 1}, { key: 2 }, { key: 3 }];

</script>

<style scoped>

</style>