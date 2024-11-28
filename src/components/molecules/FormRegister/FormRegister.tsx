import { FormEvent, useState } from "react";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { AppInput } from "../../atoms/AppInput/AppInput";
import { TitleText } from "../../atoms/TitleText/TitleText";

interface Props {
    onSubmit: (dataForm: DataForm )=> void
}

type DataForm = {
    name: string
    email: string
    password: string
}

const initialState = {
    name: "",
    email: "",
    password: ""
}

export const FormRegister = ({onSubmit}: Props) => {
    const [dataForm, setDataForm] = useState<DataForm>(initialState)
    const handleSubmit =(event: FormEvent)=>{
        event.preventDefault()
        onSubmit(dataForm);
        setDataForm(initialState)
    }
  return (
    <form onSubmit={handleSubmit}  className="flex flex-col gap-5 w-[90%] lg:w-1/4">
      <TitleText text="Registrar Usuario" />
      <AppInput
        type="text"
        label="Nombre"
        placeholder="Ingresa tu nombre"
        value={dataForm.name}
        onChange={(e) => {setDataForm({...dataForm, name:e.target.value})}}
      />
      <AppInput
        type="email"
        label="Email "
        value={dataForm.email}
        placeholder="Ingresa tu email"
        onChange={(e) => {setDataForm({...dataForm, email:e.target.value})}}
      />
      <AppInput
        type="password"
        label="Password "
        value={dataForm.password}
        placeholder="Ingresa tu password"
        onChange={(e) => {setDataForm({...dataForm, password:e.target.value})}}
      />
      <AppButton onClick={() => {}} title="Registrar" />
    </form>
  );
};
