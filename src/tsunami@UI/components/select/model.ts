export interface IOption {
    key: string | number
}

export interface ISelectProps<T> {
    modelValue?: T
    name?: string,
    options: T[],
}