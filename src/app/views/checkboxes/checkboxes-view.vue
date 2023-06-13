<template>
    <div class="app__view">
        <section>
            <h1 class="title">Checkbox</h1>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Basic</h3>
            <div class="app__view-section-block">
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="data.checkbox.toggle"
                        id="checkbox-1" />
                    <span class="text">Basic checbox</span>
                </div>
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="data.checkbox.toggleDisabled" 
                        id="checkbox-2"
                        disabled />
                    <span class="text">Checked disabled</span>
                </div>
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="data.checkbox.disabled" 
                        id="checkbox-3"
                        disabled/>
                    <span class="text">Unchecked disabled</span>
                </div>
            </div>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Switch</h3>
            <div class="app__view-section-block">
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="data.switch.toggle"
                        id="switch-1"
                        type="switch" />
                    <span class="text">Basic switch</span>
                </div>
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="data.switch.toggleDisabled"
                        id="switch-2"
                        type="switch"
                        disabled />
                    <span class="text">Switch disabled</span>
                </div>
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="data.switch.disabled"
                        id="switch-3"
                        type="switch"
                        disabled />
                    <span class="text">Switch unchecked disabled</span>
                </div>
            </div>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Radio</h3>
            <div class="app__view-section-block">
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="data.radio.toggle"
                        id="radio-1"
                        type="radio" />
                    <span class="text">Basic radio</span>
                </div>
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="data.radio.toggleDisabled"
                        id="radio-2"
                        type="radio"
                        disabled />
                    <span class="text">Radio disabled</span>
                </div>
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="data.radio.disabled"
                        id="radio-3"
                        type="radio"
                        disabled />
                    <span class="text">Radio unchecked disabled</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { tsuCheckbox } from '@/tsunami@UI/components';
import { ref } from 'vue';


const data = ref({
    checkbox: {
        toggle: true,
        disabled: false,
        toggleDisabled: true
    },
    switch: {
        toggle: true,
        disabled: false,
        toggleDisabled: true
    },
    radio: {
        toggle: true,
        disabled: false,
        toggleDisabled: true
    }
});


</script>

<style lang="scss" scoped src="./index.scss">

</style>