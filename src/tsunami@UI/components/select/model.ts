//TODO: Сделать общий интерфейс IOption для всех итерируемых
// элементов
//TODO: Написать отдельную папку untils для tsunami@UI

export interface IOption {
    key: string | number
}

export interface ISelectProps<T> {
    modelValue?: T,
    options: T[],
    defaultValue?: T | null,
    state?: 'success' | 'warning' | 'default',
    type: 'default' | 'multiplay'
    name?: string,
    placeholder?: string
    reduce: (item: T) => any,
    searchable?: boolean
}