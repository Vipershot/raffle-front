interface Props {
    onClick: ()=> void
    title: string
    disabled?: boolean
    appearance?: "outline" | "primary" | "text"
}

export const AppButton =({
    onClick,
    title,
    disabled,
    appearance = "primary"

}:Props)=>{
    return <>
    <button  className={`${appearance === "primary" && "bg-info p-3 rounded-md"} ${appearance === "text" && "text-info p-3 rounded-md"}` } disabled={disabled} onClick={onClick}>{title}</button>
    </>
}
