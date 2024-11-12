interface Props {
    onClick: ()=> void
    title: string
    disabled?: boolean
}

export const AppButton =({
    onClick,
    title,
    disabled

}:Props)=>{
    return <>
    <button  className="bg-primary p-3 rounded-md " disabled={disabled} onClick={onClick}>{title}</button>
    </>
}