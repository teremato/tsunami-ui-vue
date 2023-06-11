<template>
    <!--TODO: add a multiplay-select type prop
        TODO: add a block prop for width: block  -->
    <div :class="[ 'tsu-select', `tsu-select__${state}`]" 
    tabindex="1">
        <!-- TODO: Нужна иконка на закритие\открытия,
            Пересмотреть вид select-header -->
        <div @click="handleOpen" class="tsu-select-header">
            <span v-if="!searchable" :class="[(reduceLabel) ? '' : 'tsu-select-header-placeholder']">
                {{ (reduceLabel) ? reduce(reduceLabel) : placeholder }}
            </span>
            <!--TODO: create a computed for check reduce or placeholder value
                TODO: add a visualy-hidden item for form-validate -->
            <input v-else
                :value="(reduceLabel) ? reduce(reduceLabel) : ''" 
                :placeholder="placeholder"
                type="text" 
                :class="[
                    { 'tsu-visualy-hidden': !searchable },
                    { 'tsu-select-header-search': searchable }
                ]">
            <slot name="header"></slot>
        </div>

        <ul class="tsu-select-dropdown" :class="[
            { 'tsu-select-dropdown-open': isOpen },
            { 'tsu-select-dropdown-close': !isOpen },
        ]">
            <!-- TODO: не работает modelValue -->
            <li v-for="(item, idx) in options" :key="item.key" tabindex="-1"
                @mousedown="setValue(item)"
                @mouseenter="setIndex(idx)"
                :class="[
                    'tsu-select-dropdown-option',
                    { 'tsu-select-dropdown-option-focus': index === idx },
                    //TODO: create a active-item props 
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
    (e: 'update:modelValue', target: T): T
}>();

const multiValue = ref<T[]>([]) as Ref<T[]>;
const index      = ref<number>(0);
const isOpen     = ref<boolean>(false);

const reduceLabel = computed<T | null>(() => {
    if(props.modelValue) return props.modelValue;
    else {
        if(props.defaultValue) return props.defaultValue
        return null
    }
})

const handleOpen = () => isOpen.value = !isOpen.value;
const setIndex   = (idx: number) => index.value = idx; 
const setValue   = (item: T) => emit('update:modelValue', item);

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