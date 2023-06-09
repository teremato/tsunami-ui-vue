
export interface IIconProps {
    width?: number | string,
    height?: number | string,
    customClass?: string,
    stroke?: string
}

export const defaultIconProps: IIconProps = {
    width: 36,
    height: 36,
    customClass: '',
}