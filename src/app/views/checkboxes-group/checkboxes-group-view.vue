<template>
    <div class="app__view">
        <section>
            <h1 class="title">Checkbox group</h1>
        </section>
        <section class="app__view-section app__view-section-inline checkboxes__group-row">
            <div>
                <h3 class="sub-title">Checkbox multiplay</h3>
                <div 
                    class="app__view-section-inline checkboxes__group-select">
                    <div v-for="item in checkboxValueMulti" :key="item.key"
                        class="checkboxes__group-item">
                        {{ item.animal }}
                    </div>
                </div>
                <tsu-checkbox-group
                    v-model="checkboxValueMulti"
                    direction="col"
                    id="animals_mult" 
                    :options="checkboxOptions">
                    <template #default="{ item }">
                        {{ item.animal }}
                    </template>
                </tsu-checkbox-group>
            </div>
            <div>
                <h3 class="sub-title">Checkbox single</h3>
                <div
                    class="app__view-section-inline checkboxes__group-select">
                    <div>{{ ( checkboxValueSing) ? checkboxValueSing.animal : '' }}</div>
                </div>
                <tsu-checkbox-group
                    v-model="checkboxValueSing"
                    mode="single"
                    direction="col"
                    id="animals_sing" 
                    :options="checkboxOptions">
                    <template #default="{ item }">
                        {{ item.animal }}
                    </template>
                </tsu-checkbox-group>
            </div>
        </section>
        <section class="app__view-section app__view-section-inline checkboxes__group-row">
            <div>
                <h3 class="sub-title">Switch multiplay</h3>
                <div 
                    class="app__view-section-inline checkboxes__group-select">
                    <div v-for="item in switchValueMulti" :key="item.key"
                        class="checkboxes__group-item">
                        {{ item.animal }}
                    </div>
                </div>
                <tsu-checkbox-group
                    v-model="switchValueMulti"
                    type="switch"
                    direction="col"
                    id="animals_mult-1" 
                    :options="checkboxOptions">
                    <template #default="{ item }">
                        {{ item.animal }}
                    </template>
                </tsu-checkbox-group>
            </div>
            <div>
                <h3 class="sub-title">Switch single</h3>
                <div
                    class="app__view-section-inline checkboxes__group-select">
                    <div>{{ ( switchValueSing) ? switchValueSing.animal : '' }}</div>
                </div>
                <tsu-checkbox-group
                    v-model="switchValueSing"
                    type="switch"
                    mode="single"
                    direction="col"
                    id="animals_sing-1" 
                    :options="checkboxOptions">
                    <template #default="{ item }">
                        {{ item.animal }}
                    </template>
                </tsu-checkbox-group>
            </div>
        </section>
        <section class="app__view-section app__view-section-inline checkboxes__group-row">
            <div>
                <h3 class="sub-title">Radio multiplay</h3>
                <div 
                    class="app__view-section-inline checkboxes__group-select">
                    <div v-for="item in radiohValueMulti" :key="item.key"
                        class="checkboxes__group-item">
                        {{ item.animal }}
                    </div>
                </div>
                <tsu-checkbox-group
                    v-model="radiohValueMulti"
                    type="radio"
                    direction="col"
                    id="animals_mult-2" 
                    :options="checkboxOptions">
                    <template #default="{ item }">
                        {{ item.animal }}
                    </template>
                </tsu-checkbox-group>
            </div>
            <div>
                <h3 class="sub-title">Radio single</h3>
                <div
                    class="app__view-section-inline checkboxes__group-select">
                    <div>{{ ( radioValueSing) ? radioValueSing.animal : '' }}</div>
                </div>
                <tsu-checkbox-group
                    v-model="radioValueSing"
                    type="radio"
                    mode="single"
                    direction="col"
                    id="animals_sing-2" 
                    :options="checkboxOptions">
                    <template #default="{ item }">
                        {{ item.animal }}
                    </template>
                </tsu-checkbox-group>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { tsuCheckboxGroup } from '@/tsunami@UI/components';
import { ref } from 'vue';

const checkboxValueMulti = ref<{key: number, animal: string}[]>([]); 
const checkboxValueSing = ref<{key: number, animal: string}>();

const switchValueMulti = ref<{key: number, animal: string}[]>([]); 
const switchValueSing = ref<{key: number, animal: string}>();

const radiohValueMulti = ref<{key: number, animal: string}[]>([]); 
const radioValueSing = ref<{key: number, animal: string}>();


const checkboxOptions = ref([
    { key: 1, animal: 'cat', },
    { key: 2, animal: 'bird', },
    { key: 3, animal: 'dog', },
]);

</script>

<style lang="scss" scoped src="./index.scss">
</style>