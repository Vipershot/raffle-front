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
    disabled,
    appearance,
    size,
    bold
}:Props)=>{
    const getAppearance = () => {
        if(!disabled){
            switch (appearance) {
                case 'primary':
                    return 'bg-info text-white'
                   
                case 'text':
                    return 'text-info   hover:text-primary'
                
                case 'outline':
                    return 'border border-info text-info   hover:text-primary'
                       
                default: 
                    return 'bg-info text-white'
            }
        }else{
            return 'bg-disabled'
        }
      
    }

    const getSize = () => {
        switch (size) {
            case 'sm':
                return 'p-2 text-sm'
           
            case 'md':
                return 'p-3 text-base'

            case 'lg':
                return 'px-5 py-3 text-lg'

            default:
                return 'p-3 text-base'
        }
    }

    return <>
    <button  className={` rounded-md ${getAppearance()} ${getSize()} ${size === 'full' && 'w-full'} ${bold && 'font-bold'}` } disabled={disabled} onClick={onClick}>{title}</button>
    </>
}
