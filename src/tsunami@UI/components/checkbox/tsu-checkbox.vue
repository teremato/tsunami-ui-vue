<template>
    <label :for="id">
        <div v-if="type === 'checkbox'" class="tsu-checkbox"
            :class="[
                { 'tsu-checkbox-toggle' : checked },
                { 'tsu-checkbox-disabled' : disabled }
            ]">
            <tsu-toggle-icon v-if="checked" :width="20" :height="20"
                custom-class="tsu-checkbox-icon"/>
        </div>
        <div v-else class="tsu-checkbox-switch"
            :class="[
                { 'tsu-checkbox-switch-toggle': checked },
                { 'tsu-checkbox-disabled': disabled }
            ]">
            <tsu-eclipse-icon :width="17" :height="17" custom-class="tsu-checkbox-icon"/>
        </div>
        <input @input="handleToggle" 
            :name="name"
            :disabled="disabled" 
            :value="checked"
            :checked="checked"
            class="tsu-visualy-hidden"
            type="checkbox" 
            :id="id">
    </label>
</template>

<script setup lang="ts">
import type { ICheckBoxProps } from './model';
import { 
    tsuToggleIcon,
    tsuEclipseIcon
} from '@/tsunami@UI/components/icons';


withDefaults(defineProps<ICheckBoxProps>(), {
    disabled: false,
    checked: false,
    type: 'checkbox',
    id: 'tsu-checkbox',
    name: '',
})
const emit = defineEmits<{
    (event: 'update:checked', target: boolean): boolean
}>();

const handleToggle = (event: Event) => {
    const target = event.target as HTMLInputElement;
    console.log(target.checked);
    emit('update:checked', target.checked);
}
</script>

<style lang="scss" scoped src="./index.scss">
</style>