<template>
    <div class="tsu-checkbox-group" 
        :class="[(direction === 'col') 
            ? 'app__view-section-block' 
            : 'app__view-section-inline']">
        <tsu-checkbox v-for="(item, index) in options" :key="item.key"
            @updateGroup="handleChange(item)"
            :checked="modelValue.includes(item)"
            :value="item"
            :type="type"
            :id="`${id}__${index}`">
            <slot :item="item"></slot>
        </tsu-checkbox>
    </div>
</template>

<script generic="T extends Option" setup lang="ts">
import { ref, type Ref } from 'vue';
import type { ICheckboxGroupProps, Option } from './model';
import { tsuCheckbox } from '@/tsunami@UI/components';

const modelValue = ref<T | T[]>([]) as Ref<T[]>;

const props = withDefaults(defineProps<ICheckboxGroupProps<T>>(), {
    type: 'checkbox',
    mode: 'multiplay',
    direction: 'row',
    options: () => []
})
const emit = defineEmits<{
    (e: 'update:modelValue', target: T[] | T): T[] | T
}>();

const handleChange = (item: T) => {

    switch(props.mode) {
        case 'multiplay':
            if(!modelValue.value.includes(item)) {
                modelValue.value.push(item);
                emit('update:modelValue', modelValue.value)
            } 
            else {
                modelValue.value = modelValue.value.filter((val) => val.key !== item.key)
                emit('update:modelValue', modelValue.value);
            }
        break;
        case 'single':
            modelValue.value = [];
            modelValue.value.push(item);
            emit('update:modelValue', item);
        break;
    }
}

</script>

<style scoped></style>