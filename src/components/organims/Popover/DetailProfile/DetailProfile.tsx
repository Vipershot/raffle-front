
import { RxAvatar } from 'react-icons/rx'
import { SlSettings } from "react-icons/sl";
import { TitleText } from '../../../atoms/TitleText/TitleText';
interface Props {
    
    profile: {name:string
        email:string
    }
    handlePopover: (item: string)=> void
}

export const DetailProfile =({profile, handlePopover}: Props)=>{
    return <>
     <div className=" mb-2">
    <TitleText  text="Información de la cuenta" size="xs"/>
    </div>
   

<div className="flex items-center space-x-4 mb-4">
  <div className="w-8 h-8 bg-info rounded-full flex items-center justify-center text-white">
    <RxAvatar size={30} />
  </div>
  <div className="flex-grow">
    <p className="text-sm font-medium text-gray-800">{profile.name}</p>
    <p className="text-xs text-gray-500">{profile.email}</p>
  </div>
  <SlSettings  className="text-info cursor-pointer" size={20} onClick={()=>{handlePopover("profile")}} />
</div>

    </>
}