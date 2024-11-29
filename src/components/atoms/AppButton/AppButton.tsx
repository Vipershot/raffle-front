import { getAppearance, getSizeButton } from "../../../utils/styles"

interface Props {
    onClick?: ()=> void
    title: string
    disabled?: boolean
    appearance?: "outline" | "primary" | "text",
    size?: 'sm' | 'md'| 'lg' | 'full'
    bold?: boolean
}

export const AppButton =({
    onClick,
    title,
    disabled = false,
    appearance = "primary",
    size = "md",
    bold
}:Props)=>{
 

    return <>
    <button  className={` rounded-md ${getAppearance(disabled, appearance)} ${getSizeButton(size)} ${size === 'full' && 'w-full'} ${bold && 'font-bold'}` } disabled={disabled} onClick={onClick}>{title}</button>
    </>
}
