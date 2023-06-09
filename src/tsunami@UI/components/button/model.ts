
type ButtonType = 'button' | 'submit' | 'reset';
type ButtonColor = 'primary' | 'second' | 'succes' | 'warning';
type ButtonSize = 'normal' | 'large';

export interface IButtonProps {
    type?: ButtonType,
    color?: ButtonColor,
    size?: ButtonSize,
    rounded?: boolean,
    outline?: boolean,
    disabled?: boolean,
    block?: boolean,
    label?: string,
}