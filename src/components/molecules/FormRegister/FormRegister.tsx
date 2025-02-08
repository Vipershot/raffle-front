import { FormEvent, useEffect, useState } from "react";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { AppInput } from "../../atoms/AppInput/AppInput";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { IUserAuth } from "../../../interface/login";
import { useFormInput } from "../../../hooks/useFormInput";
import {
  inputValidEmail,
  inputValidName,
  inputValidNumber,
  inputValidPassword,
} from "../../../utils/inputValid";

interface Props {
  onSubmit: (dataForm: IUserAuth) => void;
}

export const FormRegister = ({ onSubmit }: Props) => {
  const [valid, setValid] = useState(true);

  const emailInput = useFormInput({
    initialValue: "",
    validate: inputValidEmail,
  });

  const passwordInput = useFormInput({
    initialValue: "",
    validate: inputValidPassword,
  });

  const nameInput = useFormInput({
    initialValue: "",
    validate: inputValidName,
  });

  const phoneInput = useFormInput({
    initialValue: "",
    validate: (value: string) => inputValidNumber(value) /* && inputValidOperator(value) */,
  });

  useEffect(() => {
    if (
      phoneInput.value.length >= 9 &&
      nameInput.value.length > 0 &&
      emailInput.value.length > 0 &&
      emailInput.error === null &&
      passwordInput.value.length >= 8
    ) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [
    nameInput.value,
    emailInput.value,
    passwordInput.value,
    phoneInput.value,
  ]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (
      nameInput.value.length > 0 &&
      emailInput.value.length > 0 &&
      passwordInput.value.length > 0 &&
      phoneInput.value.length >= 9
    ) {
      onSubmit({
        name: nameInput.value,
        email: emailInput.value.toLowerCase(),
        password: passwordInput.value,
        phone: phoneInput.value,
      });
      nameInput.reset();
      emailInput.reset();
      passwordInput.reset();
      phoneInput.reset();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-5 w-[90%] lg:w-1/4"
    >
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
        type="text"
        maxLength={12}
        label="Numero de telefono"
        placeholder="Ingresa tu nombre"
        value={phoneInput.value.replace(/[^0-9]/g, "")}
        onChange={phoneInput.onChange}
        error={phoneInput.error}
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
