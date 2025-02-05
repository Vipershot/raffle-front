import { ReactElement } from "react"
import { getAppearance, getSizeButton } from "../../../utils/styles"

interface Props {
    onClick?: ()=> void
    title: string | ReactElement
    disabled?: boolean
    appearance?: "outline" | "primary" | "text",
    size?: 'sm' | 'md'| 'lg' | 'full'
    bold?: boolean
    border?: boolean
}

export const AppButton =({
    onClick,
    title,
    disabled = false,
    appearance = "primary",
    size = "md",
    bold,
    border
}:Props)=>{
 

    return <>
 

        <button  className={`p-0 rounded-md ${getAppearance(disabled, appearance, border)} ${getSizeButton(size)} ${size === 'full' && 'w-full'} ${bold && 'font-bold'}` } disabled={disabled} onClick={onClick}>
        <div className="rounded-md " style={{ border:border ?'1px dashed white' : 'none'}} >{title}  </div></button>
  
    </>
}
