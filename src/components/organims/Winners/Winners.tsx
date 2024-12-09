import { TitleText } from "../../atoms/TitleText/TitleText"
import { TfiCup } from "react-icons/tfi"
import CardWinners from "../../molecules/CardWinners/CardWinners"


export const Winners =()=>{
    return <>
    <div className="flex items-center justify-between mt-2 p-2">

     <div className="flex gap-2 items-center cursor-pointer">
          <TfiCup 
            className="text-lg text-info cursor-pointer hover:text-primary"
            size={25}
            
            />
          <TitleText text="Ganadores de Raffle" color="dark" size="sm" />
        </div>
            </div>
        <div className="flex flex-col gap-5 mb-5">
        <CardWinners  />
        <CardWinners 
        name="Juan Pérez"
        product="Samsung Galaxy S22"
        date="20-06-2023"
        number={42}
        avatarUrl="https://st2.depositphotos.com/1007566/12301/v/450/depositphotos_123013306-stock-illustration-avatar-man-cartoon.jpg"
      />
        </div>
    </>
}