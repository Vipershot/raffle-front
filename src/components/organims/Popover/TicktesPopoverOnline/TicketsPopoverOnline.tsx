import { RiRadioButtonLine } from "react-icons/ri"
import { TicketsPopover } from "../../../molecules/TicketsPopover/TicketsPopover"
import { TitleText } from "../../../atoms/TitleText/TitleText"
import { IDetailBuyTicket } from "../../../../interface/awards"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getTicketsBuyOnline } from "../../../../services/awards"
import { Loader } from "../../../atoms/Loader/Loader"

interface Props {
    handlePopover: (item:string, data:IDetailBuyTicket)=> void
}

export const TicketsPopoverOnline =({handlePopover}: Props) =>{
const [loading, setLoading] = useState(false);
    const [ticketsBuy, setTicketsBuy] = useState<IDetailBuyTicket[]>();
const load = async() =>{
  try {
    setLoading(true)
  const data = await getTicketsBuyOnline()
    setTicketsBuy(data)
  } catch (error) {
  }finally{
    setLoading(false)
  }
}
    useEffect(() => {
      load()
    }, []);

    return <>
    {loading? <Loader/> :  <><div className="flex items-center justify-between mt-3">
        <div className="flex gap-2 items-center">
          <RiRadioButtonLine className="text-lg text-online" size={18} />
          <TitleText text="Tickets en curso" size="xs" />
        </div>
       
        <Link to={'/history'}><p className="text-info text-sm cursor-pointer">Ver mas...</p></Link>
      </div>

      <div className="flex flex-col h-[40vh] overflow-y-auto custom-scrollbar mb-4 mt-2">
        {ticketsBuy && ticketsBuy.map((item, i) =>  <TicketsPopover key={i} data={item} handlePopover={handlePopover}/>)}
        {ticketsBuy?.length === 0 ? <p className="text-center font-bold m-auto">Adquiere tus primeros tickets</p> : ""}
      </div>
      </> }
 
      </>
    
}