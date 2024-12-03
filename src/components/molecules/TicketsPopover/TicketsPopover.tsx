
import { RxAvatar } from 'react-icons/rx'
import { IoIosArrowForward } from "react-icons/io";

export const TicketsPopover =()=>{
    return <>
  
   <div className="flex items-center gap-3  mb-4 mt-2 border-b-2 border-gray-200">
      <div className="w-15 h-15  rounded flex items-center justify-center text-white">
       
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgnZLb_l7PDyR_38Xg8Tf41zy2xqTJHn69BA&s"/>
      </div>
      <div>
        
        <p className="text-xs text-gray-500">Acer 126 cm (50 inches) V Series 4K Ultra HD Smart QLED Google TV AR50GR2851VQD (Black)</p>
      </div>
      <RxAvatar size={40} />
      <RxAvatar size={40} />
      <RxAvatar size={40} />
      <IoIosArrowForward className='text-gray-300' size={30} />
      

    </div>
    </>
}