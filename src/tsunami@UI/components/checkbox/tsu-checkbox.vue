<template>
    <label :for="id" class="tsu-checkbox-container">
        <div v-if="type === 'checkbox'" class="tsu-checkbox"
            :class="[
                { 'tsu-checkbox-toggle' : checked },
                { 'tsu-checkbox-disabled' : disabled }
            ]">
            <tsu-toggle-icon v-if="checked" :width="20" :height="20"
                custom-class="tsu-checkbox-icon"/>
        </div>
        <div v-else-if="type === 'switch'" class="tsu-checkbox-switch"
            :class="[
                { 'tsu-checkbox-switch-toggle': checked },
                { 'tsu-checkbox-disabled': disabled }
            ]">
            <tsu-eclipse-icon :width="17" :height="17" custom-class="tsu-checkbox-icon"/>
        </div>
        <div v-else-if="type === 'radio'" class="tsu-checkbox-radio"
            :class="[ 
                { 'tsu-checkbox-radio-toggle': checked },
                { 'tsu-checkbox-disabled': disabled } 
            ]">
            <div v-if="checked" class="tsu-checkbox-radio-icon"></div>
        </div>
        <div>
            <slot></slot>
        </div>
        
        <input @input="handleToggle" 
            class="tsu-visualy-hidden"
            type="checkbox" 
            :name="name"
            :disabled="disabled" 
            :checked="checked"
            :id="id">
    </label>
</template>

<script generic="T" setup lang="ts">
import type { ICheckBoxProps } from './model';
import { 
    tsuToggleIcon,
    tsuEclipseIcon
} from '@/tsunami@UI/components/icons';


const props = withDefaults(
    defineProps<ICheckBoxProps<T>>(), {
        disabled: false,
        checked: false,
        type: 'checkbox',
        id: 'tsu-checkbox',
        name: '',
})
const emit = defineEmits<{
    (event: 'update:checked', target: boolean): boolean,
    (event: 'updateGroup', target: T): T 
}>();

const handleToggle = (event: Event) => {
    const target = event.target as HTMLInputElement;
    console.log(target.checked);

    emit('update:checked', target.checked);
    emit('updateGroup', props.value!);
}
</script>

<style lang="scss" scoped src="./index.scss">
</style>