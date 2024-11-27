import {  FormEvent, useState } from "react";
import { DataForm } from "../../../interface/login";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { AppInput } from "../../atoms/AppInput/AppInput";
import { TitleText } from "../../atoms/TitleText/TitleText";

interface Props {
  onSubmit: (dataForm: DataForm )=> void
 
  
}


const initialState = {
  
  email: "",
  password: ""
}

export const FormLogin = ({ onSubmit}:Props) => {
  const [dataForm, setDataForm] = useState<DataForm>(initialState)
  const handleSubmit =(event: FormEvent)=>{
      event.preventDefault()
      onSubmit(dataForm);
      setDataForm(initialState)
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-[90%] lg:w-1/4">
      <TitleText text="Bienvenido" />
      <AppInput
        label="Email"
        placeholder="Ingresa email"
        type="email"
        
        onChange={(e) => {setDataForm({...dataForm, email:e.target.value})}}
        value={dataForm.email}
      />
      <AppInput
        type="password"
        label="Password"
        placeholder="Ingresa password"
        
        onChange={(e) => {setDataForm({...dataForm, password:e.target.value})}}
        value={dataForm.password}
      />
      <AppButton onClick={() => {}} title="Ingresar" />
    </form>
  );
};
