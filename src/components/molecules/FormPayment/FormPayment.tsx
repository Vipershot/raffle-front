import { useState } from "react";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { AppInput } from "../../atoms/AppInput/AppInput";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { FcIphone, FcLibrary, FcMoneyTransfer   } from "react-icons/fc";
import {
  IMethodBinance,
  IMethodPagoMovil,
  IFormPayment
} from "../../../interface/metodsPayment";

const initialStatePagoMovil: IMethodPagoMovil = {
  dni: "",
  idRef: "",
  mount: "",
  name: "",
};

const initialStateBinance: IMethodBinance = {
  idRef: "",
  mount: "",
  email: "",
};

interface Props{
    handleDataPayment:(data:IFormPayment)=>void
}

export const FormPayment = ({handleDataPayment}:Props) => {
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [dataFormPagoMovil, setDataFormPagoMovil] = useState<IMethodPagoMovil>(
    initialStatePagoMovil
  );
  const [dataFormBinance, setDataFormBinance] =
    useState<IMethodBinance>(initialStateBinance);

  const paymentMethods = [
    { id: "0", name: "Pago Móvil", icon: FcIphone },
    { id: "1", name: "Binance", icon: FcLibrary },
    { id: "2", name: "Divisa", icon: FcMoneyTransfer },
  ];

  const handleSubmit = () => {
    if (selectedMethod === "0") {
        handleDataPayment(dataFormPagoMovil)
    }
    if (selectedMethod === "1") {
        handleDataPayment(dataFormBinance)
    }
    if (selectedMethod === "2") {
      console.log("All data:", "Divisa pagada");
    }
    setDataFormBinance(initialStateBinance)
    setDataFormPagoMovil(initialStatePagoMovil)
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
              Rif: <strong>J-34567809-0</strong>
            </p>

            <p className="text-sm text-muted-foreground mb-4">
              Numero Celular: <strong>0323 456 45 45</strong>
            </p>
            <AppInput
              label="Nombre titular cuenta"
              type="text"
              placeholder="Genesita"
              value={dataFormPagoMovil.name}
              onChange={(e) =>
                setDataFormPagoMovil({
                  ...dataFormPagoMovil,
                  name: e.target.value,
                })
              }
            />
            <div className="flex space-x-4">
              <AppInput
                label="Cedula de Identidad"
                type="text"
                placeholder="3.890.876"
                value={dataFormPagoMovil.dni}
                onChange={(e) =>
                  setDataFormPagoMovil({
                    ...dataFormPagoMovil,
                    dni: e.target.value,
                  })
                }
              />
              <AppInput
                label="Numero de referencia"
                type="text"
                placeholder="3423456"
                value={dataFormPagoMovil.idRef}
                onChange={(e) =>
                  setDataFormPagoMovil({
                    ...dataFormPagoMovil,
                    idRef: e.target.value,
                  })
                }
              />
            </div>
            <AppInput
              label="Ingresa monto a pagar: 223"
              type="text"
              placeholder="233"
              value={dataFormPagoMovil.mount}
              onChange={(e) =>
                setDataFormPagoMovil({
                  ...dataFormPagoMovil,
                  mount: e.target.value,
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
              <strong>BinanceRaffle@gmail.com</strong>
            </p>
            <AppInput
              label="Correo electronico"
              type="text"
              placeholder="Ingresa email"
              value={dataFormBinance.email}
              onChange={(e) =>
                setDataFormBinance({
                  ...dataFormBinance,
                  email: e.target.value,
                })
              }
            />
            <div className="flex space-x-4">
              <AppInput
                label="Numero de referencia"
                type="text"
                placeholder="089876583"
                value={dataFormBinance.idRef}
                onChange={(e) =>
                  setDataFormBinance({
                    ...dataFormBinance,
                    idRef: e.target.value,
                  })
                }
              />
            </div>
            <AppInput
              label="Ingresa monto a pagar: 223"
              type="text"
              placeholder="089876583"
              value={dataFormBinance.mount}
              onChange={(e) =>
                setDataFormBinance({
                  ...dataFormBinance,
                  mount: e.target.value,
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
    <div className="w-full max-w-xl mx-auto p-6 bg-white shadow-md rounded-md">
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
                setSelectedMethod(e.target.value)
                setDataFormBinance(initialStateBinance)
                setDataFormPagoMovil(initialStatePagoMovil)
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
        <AppButton onClick={handleSubmit} title="Confirmar método de pago" />
      </div>
    </div>
  );
};
