import { AppButton } from "../../atoms/AppButton/AppButton";
import { AppInput } from "../../atoms/AppInput/AppInput";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { TfiPencil } from "react-icons/tfi";
import { IoIosArrowBack } from "react-icons/io";

interface Props {
    handlePopover: (item: string)=> void
}

export const EditProfile = ({handlePopover}: Props) => {
  return (
    <>
      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-2 items-center">
        <IoIosArrowBack  className="text-lg text-gray-300 cursor-pointer" size={18} onClick={()=>handlePopover("online")}/>
          <TitleText text="Editar perfil" size="xs"  />
        </div>
        <TfiPencil className="text-info" size={18}  />
      </div>

      <div className="grid grid-cols-2 p-1  overflow-y-auto custom-scrollbar  gap-5 mb-4 mt-2">
        <AppInput label="" placeholder="Genesis" onChange={() => {}} />
        <AppInput label="" placeholder="Rojas" onChange={() => {}} />
     <div className="col-span-2 md:col-span-1">
     <AppInput
          label=""
          placeholder="rojasgenesiis15@gmail.com"
          onChange={() => {}}
        />
     </div>
     <div className="col-span-2 md:col-span-1">
     <AppInput label="" placeholder="Numero de telefono" onChange={() => {}} />

     </div>
     <div className="col-span-2 md:col-span-1">
        <AppInput label="" placeholder="Contrasena" onChange={() => {}} />
            </div>
            <div className="col-span-2 md:col-span-1">
        <AppInput label="" placeholder="Nueva contrasena" onChange={() => {}} />
            </div>
      </div>
      <div className="w-full mb-3">
        <AppButton title="Guardar cambios" appearance="outline" size="full" />
      </div>
    </>
  );
};
