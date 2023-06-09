
type CheckboxType = 'checkbox' | 'switch';

export interface ICheckBoxProps {
    type?: CheckboxType,
    disabled?: boolean,
    checked?: boolean,
    name?: string,
    id: string
}