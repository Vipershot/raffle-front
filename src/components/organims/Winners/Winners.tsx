import { TitleText } from "../../atoms/TitleText/TitleText"
import { TfiCup } from "react-icons/tfi"
import CardWinners from "../../molecules/CardWinners/CardWinners"


export const Winners =()=>{
    return <>
    <div className="flex items-center justify-between mt-2 p-2">

     <div className="flex gap-2 items-center">
          <TfiCup 
            className="text-lg text-info"
            size={25}
            
            />
          <TitleText text="Ganadores de Raffle" color="dark" size="sm" />
        </div>
            </div>
        <div className="flex flex-col gap-5 mb-5 items-center  w-full ">
       <div className="w-full md:w-[700px] ">
       <CardWinners   />
        <div className="w-full h-[2px] bg-gray-300  mt-4"></div>
       </div>

       <div className="w-full md:w-[700px]  ">
       <CardWinners 
        name="Juan Pérez"
        product="Samsung Galaxy S22"
        date="20-06-2023"
        number={42}
        avatarUrl="https://st2.depositphotos.com/1007566/12301/v/450/depositphotos_123013306-stock-illustration-avatar-man-cartoon.jpg"
      />
       <div className="w-full h-[2px] bg-gray-300  mt-4"></div>
       </div>
        </div>
    </>
}