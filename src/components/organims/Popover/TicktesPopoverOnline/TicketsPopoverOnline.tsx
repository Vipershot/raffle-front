import { RiRadioButtonLine } from "react-icons/ri"
import { TicketsPopover } from "../../../molecules/TicketsPopover/TicketsPopover"
import { TitleText } from "../../../atoms/TitleText/TitleText"
import { IDetailBuyTicket } from "../../../../interface/awards"
import { Link } from "react-router-dom"

interface Props {
    handlePopover: (item:string, data:IDetailBuyTicket)=> void
}



export const TicketsPopoverOnline =({handlePopover}: Props) =>{
    const dataTicket: IDetailBuyTicket = {
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgnZLb_l7PDyR_38Xg8Tf41zy2xqTJHn69BA&s",
        title:'Acer 126 cm (50 inches) V Series 4K Ultra HD Smart QLED Google TV AR50GR2851VQD (Black)',
        tickets: [2, 3, 4],
        ticketPrice: '10',
        buyDate: '10/03/24',
        endDate: '20/03/24',
        hour: '8:00pm',
    }
    return <>
    <div className="flex items-center justify-between mt-3">
        <div className="flex gap-2 items-center">
          <RiRadioButtonLine className="text-lg text-online" size={18} />
          <TitleText text="Tickets en curso" size="xs" />
        </div>
       
        <Link to={'/history'}><p className="text-info text-sm cursor-pointer">Ver mas...</p></Link>
      </div>

      <div className="flex flex-col h-[40vh] overflow-y-auto custom-scrollbar mb-4 mt-2">
        <TicketsPopover data={dataTicket} handlePopover={handlePopover}/>
        <TicketsPopover data={dataTicket} handlePopover={handlePopover}/>
        <TicketsPopover data={dataTicket} handlePopover={handlePopover}/>
        <TicketsPopover data={dataTicket} handlePopover={handlePopover}/>

      </div>
      </>
    
}