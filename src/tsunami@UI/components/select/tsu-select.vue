<template>
    <div class="tsu-select" tabindex="1">
        <!-- 
            TODO: Нужна иконка на закритие\открытия,
            Пересмотреть вид select-header
        -->
        <div @click="handleOpen" class="tsu-select-header">
            {{ modelValue ? modelValue : 'choose' }}
            <slot name="header"></slot>
        </div>

        <ul class="tsu-select-dropdown" :class="[
            { 'tsu-select-dropdown-open': isOpen },
            { 'tsu-select-dropdown-close': !isOpen },
        ]">
            <!-- TODO: не работает modelValue -->
            <li v-for="(item, idx) in options" :key="item.key" tabindex="-1"
                @mousedown="setValue(item)"
                @mouseenter="setIndex(index)"
                :class="[
                    'tsu-select-dropdown-option',
                    { 'tsu-select-dropdown-option-active': modelValue === item },
                    { 'tsu-select-dropdown-option-focus': index === idx }
                ]" >
                {{ item }}
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
    onUnmounted
} from 'vue';
import { 
    type ISelectProps,
    type IOption 
} from './model';


const props = withDefaults(
    defineProps<ISelectProps<T>>(), {
        name: '',
        options: () => []
});
const emit = defineEmits<{
    (e: 'update:modelValue', target: T): T
}>();

const index = ref<number>(0);
const isOpen = ref<boolean>(false);

const handleOpen = () => isOpen.value = !isOpen.value;
const setIndex = (idx: number) => index.value = idx; 
const setValue = (item: T) => emit('update:modelValue', item);

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
            emit('update:modelValue', props.options[index.value]);
        break;
    }
}

</script>

<style lang="scss" scoped src="./index.scss">
</style>