import { useEffect, useState } from "react";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { AppInput } from "../../atoms/AppInput/AppInput";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { FcIphone, FcLibrary } from "react-icons/fc";

import {
  IMethodPay
} from "../../../interface/metodsPayment";

interface Props {
  handleDataPayment: (data: IMethodPay) => void;
  paymentAmount: number;
  ticketPrice: number;
  count: number;
  priceInBolivars: number;
  handlePay: (data: IMethodPay) => void
}

export const FormPayment = ({
  handleDataPayment,
  ticketPrice,
  count,
  priceInBolivars,
  handlePay
}: Props) => {
  // const mountBs = paymentAmount * 49;
  const mountUsd = count * ticketPrice;

  const initialState: IMethodPay = {
    dni: "",
    reference: "",
    paymentAmount: 0,
    name: "",
    phone: "",
    email: "",
    paymentMethod: "BINANCE"
  };


  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [errorEmail, setErrorEmail] = useState("")
  const [dataForm, setDataForm] = useState<IMethodPay>(
    initialState
  );

  const [isFormValid, setIsFormValid] = useState(false);
  const paymentMethods = [
    { id: "0", name: "Pago Móvil", icon: FcIphone },
    { id: "1", name: "Binance", icon: FcLibrary },
    // { id: "2", name: "Divisa", icon: FcMoneyTransfer },
  ];



  useEffect(() => {
    if (selectedMethod === "0") {
      const { dni, reference, name, paymentAmount } = dataForm;
      setIsFormValid(
        dni.trim() !== "" &&
          reference.trim() !== "" &&
          name.trim() !== "" &&
          paymentAmount > 0
      );
    } else if (selectedMethod === "1") {
      const { email, reference, paymentAmount } = dataForm;
      setIsFormValid(email?.trim() !== "" && reference.trim() !== "" && paymentAmount > 0 && errorEmail === "");
    } else {
      setIsFormValid(false);
    }
  }, [selectedMethod, dataForm, dataForm]);

  const handleSubmit = () => {
    if (selectedMethod === "0") {
      const {email, ...payload} = dataForm
      handleDataPayment({...payload, paymentMethod: 'PAGO_MOVIL'})
      console.log(email)
      handlePay({...payload, paymentMethod: 'PAGO_MOVIL'})
    }
    if (selectedMethod === "1" && errorEmail ==="") {
      handleDataPayment({...dataForm, paymentMethod: 'BINANCE'})
      handlePay({...dataForm, paymentMethod: 'BINANCE'})
    }    
 
    setDataForm(initialState);
  };


  const renderPaymentInfo = () => {
    switch (selectedMethod) {
      case "0":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground mb-4">
              Banco: <strong>Banesco</strong>
            </p>

            <p className="text-sm text-muted-foreground mb-4">
              Ced: <strong>V-26510955</strong>
            </p>

            <p className="text-sm text-muted-foreground mb-4">
              Numero Celular: <strong>04241781737</strong>
            </p>

            <div className="flex space-x-4">
              <AppInput
                label="Nombre titular cuenta"
                type="text"
                placeholder="Titular de la cuenta"
                value={dataForm.name}
                onChange={(e) =>
                  setDataForm({
                    ...dataForm,
                    name: e.target.value.replace(/[^a-zA-Z\s]/g, ""),
                  })
                }
              />
              <AppInput
                label="Cédula de Identidad"
                type="text"
                maxLength={8}
                placeholder="Documento de identidad"
                value={dataForm.dni}
                onChange={(e) =>
                  setDataForm({
                    ...dataForm,
                    dni: e.target.value.replace(/\D/g, ""),
                  })
                }
              />
            </div>
            <AppInput
              label="Número de referencia del pago"
              type="text"
              placeholder="Ingresar número de referencia"
              maxLength={11}
              value={dataForm.reference}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  reference: e.target.value.replace(/\D/g, ""),
                })
              }
            />
             <AppInput
              label="Número de teléfono titular de cuenta"
              type="text"
              placeholder="Ingresar número de teléfono"
              maxLength={11}
              value={dataForm.phone}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  phone: e.target.value.replace(/\D/g, ""),
                })
              }
            />
            <AppInput
              label={`Ingresa monto a pagar: ${priceInBolivars.toFixed(2)} Bs`}
              type="number"
              step="0.1"
              max="99999999.99"
              placeholder={`${priceInBolivars.toFixed(2)} Bs...`} 
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  paymentAmount:Number(e.target.value.replace(/[^0-9.]/g, "")),
                })
              }
            />
          </div>
        );
      case "1":
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Dirección de correo electrónico:{" "}
              <strong>manguilas2525@gmail.com</strong>
            </p>
            <AppInput
              label="Correo electrónico"
              type="text"
              placeholder="Ingresa correo electrónico"
              value={dataForm.email ? dataForm.email : ''}
              onChange={(e) =>{
                const value = e.target.value;
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && !emailPattern.test(value)) {
                  setErrorEmail("Formato de email no válido");
                } else {
                  setErrorEmail("");
                }
                setDataForm({
                  ...dataForm,
                  email: value,
                })}
              }
              error={errorEmail}
            />
            <AppInput
              label="ID orden"
              type="text"
              placeholder="Ingresar número de orden"
              value={dataForm.reference}
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  reference: e.target.value.replace(/\D/g, ""),
                })
              }
            />

            <AppInput
              label={`Ingresa monto a pagar: ${mountUsd} USDT`}
              type="text"
              placeholder={`${mountUsd} USDT`}
              value={
                dataForm.paymentAmount !== 0
                  ? dataForm.paymentAmount.toString()
                  : ""
              }
              onChange={(e) =>
                setDataForm({
                  ...dataForm,
                  paymentAmount: Number(e.target.value.replace(/\D/g, "")) || 0,
                })
              }
            />
          </div>
        );
      case "2":
        return (
          <p className="text-sm text-muted-foreground">
            Suspendido pago en Divisas
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full md:max-w-xl mx-auto p-6 bg-white rounded-md">
      <div className="mb-6">
        <TitleText text="Seleccione método de pago" />
        <h2 className="text-sm text-gray-600">
          Elige tu forma de pago preferida
        </h2>
      </div>
      <form className="space-y-4">
        {paymentMethods.map((method) => (
          <label key={method.id} className="flex items-center space-x-2">
            <input
              type="radio"
              name="paymentMethod"
              value={method.id}
              checked={selectedMethod === method.id}
              onChange={(e) => {
                setSelectedMethod(e.target.value);
                setDataForm(initialState);
              }}
              className="form-radio text-blue-600"
            />
            <div className="flex items-center space-x-2">
              <method.icon className="h-6 w-6 text-gray-600" />
              <span className="text-sm font-medium">{method.name}</span>
            </div>
          </label>
        ))}
      </form>
      {selectedMethod && (
        <div className="mt-6 p-4 bg-gray-50 rounded-md">
          <h3 className="text-sm font-medium mb-2">
            Datos para realizar el pago
          </h3>
          {renderPaymentInfo()}
        </div>
      )}
      <div className="mt-6">
        <AppButton
          onClick={handleSubmit}
          title="Confirmar método de pago"
          size="full"
          disabled={!isFormValid}
        />
      </div>
  
    </div>
  );
};
