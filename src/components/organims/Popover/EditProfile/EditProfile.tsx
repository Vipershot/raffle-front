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
  const [fieldChanges, setFieldChanges] = useState<{ [key: string]: string }>({});
  const { setProfile } = useContext(AuthContext);
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(dataForm)
    setDataForm(initialState);
  };
  

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getProfile().then((res) =>
        setDataForm(res)
      );
    }
  }, [])

  const handleEdit = async () => {
    await patchProfile(fieldChanges)
    setFieldChanges({});
    getProfile().then((res) =>
      setDataForm(res),
    );
    setProfile({name: dataForm.name, email:dataForm.email, phone:dataForm.phone, lastName:dataForm.lastName })
  }

  const handleChange = (field: string, value: string) => {
    setFieldChanges((prev) => ({ ...prev, [field]: value })); // Solo actualiza el campo que cambia
  };
  
console.log(fieldChanges)
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
          value={fieldChanges.name || dataForm.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />
        <AppInput
          label=""
          placeholder="Apellido"
          type="text"
          value={fieldChanges.lastName || dataForm.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
        />
        <div className="col-span-2 md:col-span-1">
          <AppInput
            label=""
            type="email"
            placeholder="Correo electrónico"
            value={fieldChanges.email || dataForm.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AppInput
            label=""
            type="text"
            placeholder="Número de teléfono"
            value={fieldChanges.phone || dataForm.phone}
            onChange={(e) => {
              const sanitizedValue = e.target.value.replace(/[^0-9]/g, "");
              handleChange("phone", sanitizedValue);
            }}
          />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AppInput label="" 
          type="password"
          placeholder="Contraseña" 
          value={fieldChanges.password || dataForm.password}
          onChange={(e) => handleChange("password", e.target.value)} />
        </div>
        <div className="col-span-2 md:col-span-1">
          <AppInput
            label=""
            type="password"
            placeholder="Cambiar contraseña"
            value={fieldChanges.newPassword || dataForm.newPassword}
            onChange={(e) => handleChange("newPassword", e.target.value)}
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
