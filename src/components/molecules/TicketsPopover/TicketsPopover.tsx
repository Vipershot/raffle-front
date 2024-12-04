
import { RxAvatar } from 'react-icons/rx'
import { IoIosArrowForward } from "react-icons/io";
import { IDetailBuyTicket } from '../../../interface/awards';
interface Props {
  handlePopover: (item:string, data:IDetailBuyTicket)=> void

  data: IDetailBuyTicket
}

export const TicketsPopover =({handlePopover, data}:Props)=>{

    return <>
  
   <div className="flex items-center gap-3  mb-4 mt-2 border-b-2 border-gray-200">
      <div className="w-15 h-15  rounded flex items-center justify-center text-white">
       
        <img src={data.img}/>
      </div>
      <div>
        
        <p className="text-xs text-gray-500">{data.title.substring(0, 40)}{data.title.length > 40 && '...'}</p>
      </div>
      {data.tickets.map(() =>   <RxAvatar size={40} />)}
    

      <IoIosArrowForward className='text-gray-300 cursor-pointer' size={50} onClick={()=> handlePopover('details',data)}/>
      

    </div>
    </>
}