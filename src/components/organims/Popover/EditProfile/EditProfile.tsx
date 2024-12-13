import { AppButton } from "../../../atoms/AppButton/AppButton";
import { AppInput } from "../../../atoms/AppInput/AppInput";
import { TitleText } from "../../../atoms/TitleText/TitleText";
import { TfiPencil } from "react-icons/tfi";
import { IoIosArrowBack } from "react-icons/io";
import { IProfile } from "../../../../interface/EditProfile";
import { FormEvent, useContext, useEffect, useState } from "react";
import { getProfile, patchProfile } from "../../../../services/auth";
import { AuthContext } from "../../../../context/AuthContext";

interface Props {
  handlePopover: (item: string) => void;
  onClick: () => void;

}

const initialState = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  password: "",
  newPassword: "",
};

export const EditProfile = ({ handlePopover, onClick }: Props) => {
  const [dataForm, setDataForm] = useState<IProfile>(initialState);
  const { setProfile, profile } = useContext(AuthContext);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(dataForm)
    setDataForm(initialState);
  };
  console.log('profilr', profile)

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile().then((res) =>
        setDataForm(res)
      );
    }
  }, [])

  const handleEdit = async () => {
    await patchProfile(dataForm)
    setProfile({name: dataForm.name, email:dataForm.email, phone:dataForm.phone, lastName:dataForm.lastName })
    getProfile().then((res) =>
      setDataForm(res),
    );
  }
  
console.log(dataForm)
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center justify-between mt-3">
        <div
          className="flex gap-2 items-center cursor-pointer"
          onClick={() => handlePopover("online")}
        >
          <IoIosArrowBack
            className="text-lg text-gray-300 cursor-pointer hover:text-dark"
            size={18}
          />
          <TitleText text="Editar perfil" size="xs" />
        </div>
        <TfiPencil className="text-info" size={18} />
      </div>

      <div className="grid grid-cols-2 p-1  overflow-y-auto custom-scrollbar  gap-5 mb-4 mt-2">
        <AppInput
          label=""
          placeholder="Nombre"
          type="text"
          value={dataForm.name}
          onChange={(e) => {
            setDataForm({ ...dataForm, name: e.target.value });
          }}
        />
        <AppInput
          label=""
          placeholder="Apellido"
          type="text"
          value={dataForm.lastName}
          onChange={(e) => {
            setDataForm({ ...dataForm, lastName: e.target.value });
          }}
        />
        <div className="col-span-2 md:col-span-1">
          <AppInput
            label=""
            type="email"
            placeholder="Correo electrónico"
            value={dataForm.email}
            onChange={(e) => {setDataForm({...dataForm, email:e.target.value})}}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AppInput
            label=""
            type="text"
            placeholder="Número de teléfono"
            value={dataForm.phone}
            onChange={(e) => {
              const sanitizedValue = e.target.value.replace(/[^0-9]/g, '')
              setDataForm({...dataForm, phone:sanitizedValue})}}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AppInput label="" 
          type="password"
          placeholder="Contraseña" 
          value={dataForm.password}
          onChange={(e) => {setDataForm({...dataForm, password:e.target.value})}} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AppInput
            label=""
            type="password"
            placeholder="Cambiar contraseña"
            value={dataForm.newPassword}
            onChange={(e) => {setDataForm({...dataForm, newPassword:e.target.value})}}
          />
        </div>
      </div>
      <div className="w-full mb-3">
        <AppButton title="Guardar cambios" appearance="outline" size="full" onClick={handleEdit} />
      </div>
      <div className="w-full mb-3">
        <AppButton size="full" title="Cerrar sesion" onClick={onClick} />
      </div>
    </form>
  );
};
