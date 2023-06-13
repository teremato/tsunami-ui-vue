<template>
    <div :class="[ 'tsu-select', `tsu-select__${state}`]" tabindex="1">

        <div @click="handleOpen" class="tsu-select-header">
            <!-- TODO: поправить стили  -->
            <span v-if="type === 'multiplay'" class="tsu-select-header-multiplay">
                <!-- TODO: сделать иконку крестик -->
                <span v-for="item in multiValue" :key="item.key"
                    class="tsu-select-header-multiplay-item">
                    {{ reduce(item) }}
                </span>
            </span>

            <input :disabled="!searchable" 
                :value="(reduceLabel) ? reduce(reduceLabel as T) : ''" 
                :placeholder="placeholder"
                :name="name"
                :class="[
                    { 'tsu-select-header-search': searchable },
                    { 'tsu-visualy-hidden': multiValue.length }
                ]"
                type="text">
            <slot name="header"></slot>
        </div>

        <ul class="tsu-select-dropdown" :class="[
            { 'tsu-select-dropdown-open': isOpen },
            { 'tsu-select-dropdown-close': !isOpen },
        ]">
            <li v-for="(item, idx) in options" :key="item.key" tabindex="-1"
                @mousedown="setValue(item)"
                @mouseenter="setIndex(idx)"
                :class="[
                    'tsu-select-dropdown-option',
                    { 'tsu-select-dropdown-option-focus': index === idx },
                    { 'tsu-select-dropdown-option-active': multiValue.includes(item) }
                ]" >
                {{ reduce(item) }}
                <slot name="option" :option="item"></slot>
            </li>
            <slot name="footer"></slot>
        </ul>
    </div>
</template>

<script generic="T extends IOption" setup lang="ts">
import { 
    ref,
    onMounted,
    onUnmounted,
    computed,
    type Ref,
} from 'vue';
import { 
    type ISelectProps,
    type IOption 
} from './model';


const props = withDefaults(
    defineProps<ISelectProps<T>>(), {
        name: '',
        placeholder: 'Choose',
        state: 'default',
        defaultValue: null,
        type: 'default',
        options: () => []
});
const emit  = defineEmits<{
    (e: 'update:modelValue', target: T | T[]): T | T[],
    (e: 'search', query: string): string
}>();

const multiValue = ref<T[]>([]) as Ref<T[]>;
const index      = ref<number>(0);
const isOpen     = ref<boolean>(false);

const reduceLabel = computed<T | T[] | null>(() => {
    if(props.modelValue) return props.modelValue;
    else {
        if(props.defaultValue) return props.defaultValue
        return null
    }
})

const handleOpen = () => isOpen.value = !isOpen.value;
const setIndex   = (idx: number) => index.value = idx;
const setValue   = (item: T) => {
    if(props.type === 'multiplay') {
        multiValue.value.push(item);
        emit('update:modelValue', multiValue.value);
    }
    else emit('update:modelValue', item);
}

onMounted(() => {
    window.addEventListener('mousedown', selectStateObserver);
    window.addEventListener('keydown', keyMove);
})
onUnmounted(() => {
    window.removeEventListener('mousedown', selectStateObserver);
    window.removeEventListener('keydown', keyMove);
})

const selectStateObserver = (event: Event) => {
    const target = event.target as HTMLElement;

    if(isOpen.value) {
        if(!target.closest('tsu-select')) {
            isOpen.value = false;
        }
    }
}
const keyMove = (event: KeyboardEvent) => {

    switch(event.key) {
        case 'ArrowUp':
            index.value = (index.value > 0) ? index.value - 1 : props.options.length - 1;
        break;
        case 'ArrowDown':
            index.value = (index.value >= props.options.length - 1) ? 0 : index.value + 1;
        break;
        case 'Enter':
            isOpen.value = false;
            emit('update:modelValue', props.options[index.value]);
        break;
    }
}
</script>

<style lang="scss" scoped src="./index.scss"></style>