
export type Option = {
    key: string | number
}


export interface ICheckboxGroupProps<T> {
    modelValue?: T | T[],
    options?: T[],
    type?: 'switch' | 'radio' | 'checkbox',
    mode?: 'single' | 'multiplay',
    direction?: 'row' | 'col',
    id: string
}