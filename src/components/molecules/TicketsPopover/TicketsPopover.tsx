
import { IoIosArrowForward } from "react-icons/io";
import { IDetailBuyTicket } from '../../../interface/awards';
interface Props {
  handlePopover: (item:string, data:IDetailBuyTicket)=> void

  data: IDetailBuyTicket
}

export const TicketsPopover =({handlePopover, data}:Props)=>{

    return <>
  
   <div className="flex items-center  gap-3  py-5 border-b-2 border-gray-200 cursor-pointer  px-2" onClick={()=> handlePopover('details',data)}>
      <div className="rounded flex items-center justify-center text-white">
       
        <img src={data.cover} className="h-[100px] w-[100px] object-contain"/>
      </div>
      <div>
        
        <p className="text-xs text-gray-500">{data.title.substring(0, 40)}{data.title.length > 40 && '...'}</p>
      </div>
     
      <div className="flex gap-2 mt-2 ">
        {data?.tickets.slice(0, 3).map((item, index) => (
          <b
            key={index}
            className="text-white bg-primary text-center text-sm"
            style={{
              borderRadius: "30px",
              padding: "4px 10px",
            }}
          >
            {item.ticketNumber}
          </b>
        ))}
      </div>

      <IoIosArrowForward className='text-gray-300 cursor-pointer hover:text-dark' size={30} />
      

    </div>
    </>
}