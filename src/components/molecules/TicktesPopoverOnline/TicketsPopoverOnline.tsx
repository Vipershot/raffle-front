import { HiArrowPath } from "react-icons/hi2"
import { RiRadioButtonLine } from "react-icons/ri"
import { TicketsPopover } from "../TicketsPopover/TicketsPopover"
import { TitleText } from "../../atoms/TitleText/TitleText"
import { IDetailBuyTicket } from "../../../interface/awards"

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
        <HiArrowPath className="text-info" size={18} />
      </div>

      <div className="flex flex-col h-[40vh] overflow-y-auto custom-scrollbar items-center gap-3 mb-4 mt-2">
        <TicketsPopover data={dataTicket} handlePopover={handlePopover}/>
        <TicketsPopover data={dataTicket} handlePopover={handlePopover}/>
        <TicketsPopover data={dataTicket} handlePopover={handlePopover}/>
        <TicketsPopover data={dataTicket} handlePopover={handlePopover}/>

      </div>
      </>
    
}