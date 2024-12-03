import { TitleText } from "../../atoms/TitleText/TitleText"
import { RxAvatar } from 'react-icons/rx'

interface Props {
    
    profile: {name:string
        email:string
    }
}

export const DetailProfile =({profile}: Props)=>{
    return <>
     <div className=" mb-2">
    <TitleText  text="Información de la cuenta" size="xs"/>
    </div>
     <div className="flex items-center gap-3 mb-4">
      <div className="w-8 h-8 bg-info rounded-full flex items-center justify-center text-white">
        <RxAvatar size={30} />
      </div>
      <div>
        <p className="text-sm font-medium text-gray-800">{profile.name}</p>
        <p className="text-xs text-gray-500">{profile.email}</p>
      </div>

    </div>
    </>
}