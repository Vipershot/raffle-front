import { useEffect, useState } from "react";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { AppInput } from "../../atoms/AppInput/AppInput";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { FcIphone, FcLibrary } from "react-icons/fc";
import { BiLoader } from "react-icons/bi";
import {
  IMethodBinance,
  IMethodPagoMovil,
  IFormPayment,
} from "../../../interface/metodsPayment";
import AppModal from "../../atoms/AppModal/AppModal";
import { useNavigate } from "react-router-dom";

interface Props {
  handleDataPayment: (data: IFormPayment) => void;
  mount: number;
  ticketPrice: number;
  count:number;
}

export const FormPayment = ({ handleDataPayment, mount, ticketPrice, count }: Props) => {
  const mountBs = mount * 49;
  const mountUsd = count * ticketPrice;

  const initialStatePagoMovil: IMethodPagoMovil = {
    dni: "",
    idRef: "",
    mount: 0,
    name: "",
  };

  const initialStateBinance: IMethodBinance = {
    idRef: "",
    mount: 0,
    email: "",
  };

  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [dataFormPagoMovil, setDataFormPagoMovil] = useState<IMethodPagoMovil>(
    initialStatePagoMovil
  );
  const [dataFormBinance, setDataFormBinance] =
    useState<IMethodBinance>(initialStateBinance);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const paymentMethods = [
    { id: "0", name: "Pago Móvil", icon: FcIphone },
    { id: "1", name: "Binance", icon: FcLibrary },
    // { id: "2", name: "Divisa", icon: FcMoneyTransfer },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (selectedMethod === "0") {
      const { dni, idRef, name, mount } = dataFormPagoMovil;
      setIsFormValid(
        dni.trim() !== "" &&
          idRef.trim() !== "" &&
          name.trim() !== "" &&
          mount > 0
      );
    } else if (selectedMethod === "1") {
      const { email, idRef, mount } = dataFormBinance;
      setIsFormValid(email.trim() !== "" && idRef.trim() !== "" && mount > 0);
    } else {
      setIsFormValid(false);
    }
  }, [selectedMethod, dataFormPagoMovil, dataFormBinance]);

  const handleSubmit = () => {
    setIsModalOpen(true);
    if (selectedMethod === "0") {
      handleDataPayment(dataFormPagoMovil);
    }
    if (selectedMethod === "1") {
      handleDataPayment(dataFormBinance);
    }
    if (selectedMethod === "2") {
      console.log("All data:", "Divisa pagada");
    }
    setDataFormBinance(initialStateBinance);
    setDataFormPagoMovil(initialStatePagoMovil);
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

            <div className="flex space-x-4">
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
              <AppInput
                label="Cedula de Identidad"
                type="text"
                placeholder="1.234.567"
                value={dataFormPagoMovil.dni}
                onChange={(e) =>
                  setDataFormPagoMovil({
                    ...dataFormPagoMovil,
                    dni: e.target.value,
                  })
                }
              />
            </div>
            <AppInput
              label="Numero de referencia"
              type="text"
              placeholder="Ingresar numero de referencia"
              value={dataFormPagoMovil.idRef}
              onChange={(e) =>
                setDataFormPagoMovil({
                  ...dataFormPagoMovil,
                  idRef: e.target.value,
                })
              }
            />
            <AppInput
              label={`Ingresa monto a pagar: ${mountBs} Bs`}
              type="text"
              placeholder={`${mountBs} Bs...`}
              value={
                dataFormPagoMovil.mount !== 0
                  ? dataFormPagoMovil.mount.toString()
                  : ""
              }
              onChange={(e) =>
                setDataFormPagoMovil({
                  ...dataFormPagoMovil,
                  mount: Number(e.target.value) || 0,
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
            <AppInput
              label="Numero de referencia"
              type="text"
              placeholder="Ingresar numero de referencia"
              value={dataFormBinance.idRef}
              onChange={(e) =>
                setDataFormBinance({
                  ...dataFormBinance,
                  idRef: e.target.value,
                })
              }
            />

            <AppInput
              label={`Ingresa monto a pagar: ${mountUsd} USDT`}
              type="text"
              placeholder={`${mountUsd} USDT`}
              value={
                dataFormBinance.mount !== 0
                  ? dataFormBinance.mount.toString()
                  : ""
              }
              onChange={(e) =>
                setDataFormBinance({
                  ...dataFormBinance,
                  mount: Number(e.target.value) || 0,
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
                setDataFormBinance(initialStateBinance);
                setDataFormPagoMovil(initialStatePagoMovil);
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
      <div>
        <AppModal
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={
            <>
            <BiLoader  className="inline-block ml-2" />  Procesando pago 
            </>
          }
  
        >
          <div className="space-y-4">
            <p className="text-dark">Su pago esta siendo procesado.</p>
            <p className="text-dark">
              La información sobre tu compra llegará en breve a tu correo
              electrónico.
            </p>
            <p className="text-dark">
              Por favor revise su bandeja de entrada y carpeta de spam si no lo
              ve en los próximos minutos.
            </p>
            <AppButton
              size="full"
              onClick={() => navigate("/")}
              title="Confirmar"
            />
          </div>
        </AppModal>
      </div>
    </div>
  );
};
