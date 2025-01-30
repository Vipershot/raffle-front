import { IAppearance, ISize } from "../interface/styles"

export const getAppearance = (disabled: boolean, appearance: IAppearance, border?: boolean ) => {
    if(!disabled){
        switch (appearance) {
            case 'primary':
                return 'bg-info text-white'
               
            case 'text':
                return 'text-primary   hover:font-bold'
            
            case 'outline':
                return `border border-info text-info ${border && 'border-dashed '}   hover:text-primary`
                   
            default: 
                return 'bg-info text-white'
        }
    }else{
        return 'bg-disabled'
    }
  
}

export const getSizeButton = (size: ISize) => {
    switch (size) {
        case 'xs':
            return 'text-xs-[10px]'
        case 'sm':
            return 'p-2 text-sm'
       
        case 'md':
            return 'p-3 text-base'

        case 'lg':
            return 'px-5 py-3 text-lg'

        default:
            return 'p-2 text-base'
    }
}

export const getSizeText = (size: ISize) => {
    switch (size) {
        case 'xs':
            return 'text-xs-[10px]  md:text-xs-[12px]'
        case 'sm':
            return ' text-sm text-2xl md:text-3xl'
       
        case 'md':
            return 'text-base text-2xl md:text-3xl'

        case 'lg':
            return ' py-3 text-lg text-2xl md:text-3xl'

        default:
            return 'text-base text-2xl md:text-3xl'
    }
}

