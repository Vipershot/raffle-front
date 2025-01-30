
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
   

<div className="flex items-center space-x-2 mb-4">
  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
    <img src={`https://ui-avatars.com/api/?name=${profile.name}&background=random`} alt="" width={100} className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white"/>
  </div>
  <div className="flex-grow">
    <p className="text-sm font-medium text-gray-800">{profile.name}</p>
    <p className="text-xs text-gray-500">{profile.email}</p>
  </div>
  <SlSettings  className="text-primary cursor-pointer" size={20} onClick={()=>{handlePopover("profile")}} />
</div>

    </>
}