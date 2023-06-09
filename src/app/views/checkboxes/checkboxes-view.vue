<template>
    <div class="app__view">
        <section>
            <h1 class="title">Checkbox</h1>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Basic</h3>
            <div class="app__view-section-block">
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="check.check"
                        id="checkbox-1" />
                    <span class="text">Basic checbox</span>
                </div>
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="check.checkDisabled" 
                        id="checkbox-2"
                        disabled />
                    <span class="text">Checked disabled</span>
                </div>
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="check.uncheckDisabled" 
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
                    <tsu-checkbox v-model:checked="swicth.check"
                        id="switch-1"
                        type="switch" />
                    <span class="text">Basic switch</span>
                </div>
                <div class="inline-block">
                    <tsu-checkbox v-model:checked="check.checkDisabled"
                        id="switch-2"
                        type="switch"
                        disabled />
                    <span class="text">Switch disabled</span>
                </div>
                <div class="inline-block">
                    <tsu-checkbox v-model="check.uncheckDisabled"
                        id="switch-3"
                        type="switch"
                        disabled />
                    <span class="text">Switch unchecked disabled</span>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { tsuCheckbox } from '@/tsunami@UI/components';
import { ref } from 'vue';


const check = ref<{
    check: boolean,
    checkDisabled: boolean,
    uncheckDisabled: boolean
}>({
    check: true,
    checkDisabled: true,
    uncheckDisabled: false
});

const swicth = ref<{
    check: boolean,
    checkDisabled: boolean,
    uncheckDisabled: boolean
}>({
    check: true,
    checkDisabled: true,
    uncheckDisabled: false
});

</script>

<style lang="scss" scoped src="./index.scss">

</style>