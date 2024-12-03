import { AppButton } from '../../atoms/AppButton/AppButton'
import { TitleText } from '../../atoms/TitleText/TitleText';
import { DetailProfile } from '../../molecules/DetailProfile/DetailProfile';
import { TicketsPopover } from '../../molecules/TicketsPopover/TicketsPopover';
import { RiRadioButtonLine } from "react-icons/ri";
interface Props {
    onClick: () => void
    profile:{name:string; email:string}
}
export const Popover = ({onClick, profile}:Props) => {
 
  return (
    <div className="absolute top-full mt-2 right-0 w-[450px] bg-white border border-gray-300 rounded shadow-md p-5 z-10">
   <DetailProfile  profile={profile}/>
    <div className="mt-2 h-0.5 bg-disabled" ></div>
    <div className='flex gap-2 items-center mt-3 mb-4'>
   <RiRadioButtonLine className="text-lg text-online" size={18}  />
   <TitleText   text="Tickets en curso" size="xs"/>
   </div>
     <div className="flex flex-col h-[40vh] overflow-y-auto custom-scrollbar items-center gap-3 mb-4 mt-2">
    <TicketsPopover/>
    <TicketsPopover/>
    <TicketsPopover/>
    <TicketsPopover/>
    <TicketsPopover/>
      

    </div>
     <AppButton size="full" title="Cerrar sesion" onClick={onClick}  />
   </div>
  )
}
