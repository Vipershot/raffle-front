interface Props {
    text: string
    color?:string
}

export const TitleText =({text, color='gray-800'}: Props)=>{

    return <>
       <div className="flex items-center ">
        <h1 className={`text-2xl md:text-3xl font-bold text-${color}`}>{text}</h1>
       </div>
    </>
}