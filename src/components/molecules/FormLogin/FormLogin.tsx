import { FormEvent } from "react";
import { IUserAuth } from "../../../interface/login";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { AppInput } from "../../atoms/AppInput/AppInput";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { useFormInput } from "../../../hooks/useFormInput";

interface Props {
  onSubmit: (dataForm: IUserAuth) => void;
  loading: boolean;
}

export const FormLogin = ({ onSubmit, loading }: Props) => {

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
  
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSubmit({
      email: emailInput.value,
      password: passwordInput.value,
    });
    emailInput.reset();
    passwordInput.reset();
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-[90%] lg:w-1/4"
    >
      <TitleText text="Bienvenido" />
      <AppInput
        label="Correo electrónico"
        placeholder="Ingresa correo electrónico"
        type="email"
        onChange={emailInput.onChange}
        value={emailInput.value}
        error={emailInput.error}
      />
      <AppInput
        type="password"
        label="Contraseña"
        placeholder="Ingresa contraseña"
        onChange={passwordInput.onChange}
        value={passwordInput.value}
        error={passwordInput.error}
      />

      <AppButton
        title={loading ? "Cargando..." : "Ingresar"}
        disabled={loading}
      ></AppButton>
     
      
     
    </form>
  );
};
