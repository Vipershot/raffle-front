import { FormEvent, useEffect, useState } from "react";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { AppInput } from "../../atoms/AppInput/AppInput";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { IUserAuth } from "../../../interface/login";
import { useFormInput } from "../../../hooks/useFormInput";

interface Props {
    onSubmit: (dataForm: IUserAuth )=> void
}

export const FormRegister = ({onSubmit}: Props) => {

  const [valid, setValid] = useState(true)

    const emailInput = useFormInput({
      initialValue: "",
      validate: (value) =>
        value.includes("@") ? null : "Debe ingresar un correo electrónico válido",
    });
  
    const passwordInput = useFormInput({
      initialValue: "",
      validate: (value) =>
        value.length >= 8
          ? null
          : "La contraseña debe tener al menos 6 caracteres",
    });

    const nameInput = useFormInput({
      initialValue: "",
      validate: (value) =>
        value.length === 0
          ? "Debe ingresar su nombre"
          : null
    });

    useEffect(() => {
      if (nameInput.value.length > 0 && emailInput.value.length > 0 && emailInput.error === null && passwordInput.value.length > 0){
        setValid(false)
      } else {
        setValid(true)
      }
    }, [nameInput.value, emailInput.value, passwordInput.value])
    

    const handleSubmit =(event: FormEvent)=>{
      if (nameInput.value.length > 0 && emailInput.value.length > 0 && passwordInput.value.length > 0) {
        event.preventDefault()
        onSubmit({
          name: nameInput.value,
          email: emailInput.value,
          password: passwordInput.value,
        });
        nameInput.reset()
        emailInput.reset();
        passwordInput.reset();
      } else {
        null
      }
    }

  return (
    <form onSubmit={handleSubmit}  className="flex flex-col gap-5 w-[90%] lg:w-1/4">
      <TitleText text="Registrar Usuario" />
      <AppInput
        type="text"
        label="Nombre"
        placeholder="Ingresa tu nombre"
        value={nameInput.value}
        onChange={nameInput.onChange}
        error={nameInput.error}
      />
      <AppInput
        type="email"
        label="Correo electrónico "
        placeholder="Ingresa tu correo electrónico"
        value={emailInput.value}
        onChange={emailInput.onChange}
        error={emailInput.error}
      />
      <AppInput
        type="password"
        label="Contraseña "
        placeholder="Ingresa tu contraseña"
        value={passwordInput.value}
        onChange={passwordInput.onChange}
        error={passwordInput.error}
      />
      <AppButton onClick={() => {}} disabled={valid} title="Registrar" />
    </form>
  );
};
