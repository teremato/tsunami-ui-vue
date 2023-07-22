
type CheckboxType = 'checkbox' | 'switch' | 'radio';

export interface ICheckBoxProps<T> {
    type?: CheckboxType,
    disabled?: boolean,
    checked?: boolean,
    name?: string,
    value?: T,
    id: string
}