interface Props {
    onClick: ()=> void
    title: string
    disabled?: boolean
    appearance?: "outline" | "primary" | "text",
    size?: 'sm' | 'md'| 'lg'
}

export const AppButton =({
    onClick,
    title,
    disabled,
    appearance,
    size

}:Props)=>{
    const getAppearance = () => {
        switch (appearance) {
            case 'primary':
                return 'bg-info'
               
            case 'text':
                return 'text-info'
                   
            default: 
                return 'bg-info'
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
    <button  className={` rounded-md ${getAppearance()} ${getSize()}` } disabled={disabled} onClick={onClick}>{title}</button>
    </>
}
