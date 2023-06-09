<template>
    <div class="app__view">
        <section>
            <h1 class="title">Button</h1>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Colors variants</h3>
            <div class="app__view-section-inline">
                <tsu-button label="Primary" color="primary"/>
                <tsu-button label="Second" color="second"/>
                <tsu-button label="Succes" color="succes"/>
                <tsu-button label="Warning" color="warning"/>
            </div>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Outline</h3>
            <div class="app__view-section-inline">
                <tsu-button outline label="Primary" color="primary"/>
                <tsu-button outline label="Second" color="second"/>
                <tsu-button outline label="Succes" color="succes"/>
                <tsu-button outline label="Warning" color="warning"/>
            </div>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Rounded</h3>
            <div class="app__view-section-inline">
                <tsu-button rounded label="Primary" color="primary"/>
                <tsu-button rounded label="Second" color="second"/>
                <tsu-button rounded label="Succes" color="succes"/>
                <tsu-button rounded label="Warning" color="warning"/>
            </div>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Disabled</h3>
            <div class="app__view-section-inline">
                <tsu-button disabled label="Primary" color="primary"/>
                <tsu-button disabled label="Second" color="second"/>
                <tsu-button disabled label="Succes" color="succes"/>
                <tsu-button disabled label="Warning" color="warning"/>
            </div>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Sizes</h3>
            <div class="app__view-section-inline">
                <tsu-button size="normal" label="normal" color="primary"/>
                <tsu-button size="normal" outline label="normal" color="second"/>
                <tsu-button size="large" rounded outline label="large" color="succes"/>
                <tsu-button size="large" disabled label="large" color="warning"/>
            </div>
        </section>
        <section class="app__view-section">
            <h3 class="sub-title">Block</h3>
            <div class="app__view-section-block ">
                <tsu-button block size="normal" label="normal" color="primary"/>
                <tsu-button block size="normal" outline label="normal" color="second"/>
                <tsu-button block size="large" rounded outline label="large" color="succes"/>
                <tsu-button block size="large" disabled label="large" color="warning"/>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { tsuButton } from '@/tsunami@UI/components';

</script>

<style lang="scss" scoped src="./index.scss">
</style>