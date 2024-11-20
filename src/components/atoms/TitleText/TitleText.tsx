interface Props {
    text: string
}

export const TitleText =({text}: Props)=>{
    return <>
       <div className="flex items-center ">
       <h1 className="text-3xl font-bold text-gray-800">{text}</h1>
       </div>
    </>
}