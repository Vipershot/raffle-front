import { ISize } from "../../../interface/styles"
import { getSizeText } from "../../../utils/styles"

interface Props {
    text: string
    color?:string
    size?: ISize
}

export const TitleText =({text, color='gray-800', size="md"}: Props)=>{

    return <>
      
        <h1 className={`${getSizeText(size)} font-bold text-${color}`}>{text}</h1>
       
    </>
}