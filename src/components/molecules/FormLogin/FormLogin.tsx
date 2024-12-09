import {  FormEvent, useState } from "react";
import { IUserAuth } from "../../../interface/login";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { AppInput } from "../../atoms/AppInput/AppInput";
import { TitleText } from "../../atoms/TitleText/TitleText";

interface Props {
  onSubmit: (dataForm: IUserAuth )=> void
  loading:boolean
  
}


const initialState = {
  
  email: "",
  password: ""
}

export const FormLogin = ({ onSubmit, loading}:Props) => {
  const [dataForm, setDataForm] = useState<IUserAuth>(initialState)
  const handleSubmit =(event: FormEvent)=>{
      event.preventDefault()
      onSubmit(dataForm);
      setDataForm(initialState)
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[90%] lg:w-1/4">
      <TitleText text="Bienvenido" />
      <AppInput
        label="Correo electrónico"
        placeholder="Ingresa correo electrónico"
        type="email"
        
        onChange={(e) => {setDataForm({...dataForm, email:e.target.value})}}
        value={dataForm.email}
      />
      <AppInput
        type="password"
        label="Contraseña"
        placeholder="Ingresa contraseña"
        
        onChange={(e) => {setDataForm({...dataForm, password:e.target.value})}}
        value={dataForm.password}
      />
      <AppButton title={loading ? "Cargando...":"Ingresar"} disabled={loading}/>
    </form>
  );
};



