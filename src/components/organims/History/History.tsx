import { TitleText } from "../../atoms/TitleText/TitleText";
import { HiArrowPath } from "react-icons/hi2";
import { AppTable } from "../../molecules/AppTable/AppTable";
import { FilterHistory } from "../../molecules/FilterHistory/FilterHistory";
import { useEffect, useState } from "react";
import { getTicketsBuy, getTicketsBuyFinished, getTicketsBuyOnline } from "../../../services/awards";
import { IDetailBuyTicket } from "../../../interface/awards";

export default function History() {

  const [data, setData] = useState<IDetailBuyTicket[]>([]);

  const load = async() => {
    try {
      const data = await getTicketsBuy()
      setData(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleFilter= async(value: string) => {
    if(value === 'completed'){
      const data = await getTicketsBuyFinished()
      setData(data)
    }
    if(value === 'inProgress'){
     const data = await getTicketsBuyOnline()
     setData(data)
    }

    if(value === 'all'){
      const data = await getTicketsBuy()
      setData(data)
     }
  }

  useEffect(() => {
    load()
  }, []);
  return (
    <div>
        <div className="flex items-center justify-between mt-3 p-2">
        <div className="flex gap-2 items-center cursor-pointer">
          <HiArrowPath
            className="text-lg text-info cursor-pointer hover:text-primary"
            size={25}
            
          />
          <TitleText text="Historial compra de tickets" color="dark" size="sm" />
        </div>
        
       <div>
       <FilterHistory handleFilter={handleFilter}/>
       
       </div>
       
      </div>
      <div className=" w-full">
      <AppTable tickets={data}/>
      </div>
    </div>
  )
}
