import { useEffect, useState } from "react";
import { FormPayment } from "../../molecules/FormPayment/FormPayment";
import { IFormPayment } from "../../../interface/metodsPayment";
import { useLocation } from "react-router-dom";
import { addCommaIfNotLast } from "../../../utils/ticktes";
import { TitleText } from "../../atoms/TitleText/TitleText";


export const Payment = () => {
  const [dataPayment, setDataPayment] = useState<IFormPayment>();
  const {state} = useLocation()
  const {ticketsSelected} = state

  const handleDataPayment = (data:IFormPayment) =>{
    setDataPayment(data)
  }

  useEffect(() => {
    if(dataPayment){
      console.log('Service', dataPayment)
    }
  }, [dataPayment]);

  return <>
    <div className="w-full md:max-w-xl mx-auto p-6 bg-white mt-5">
    <div className="mb-6">
        <TitleText text="Detalle de selección" />
        <h2 className="text-sm text-gray-600">
          información de tickets seleccionados
        </h2>
      </div>
    <div className="flex flex-col md:flex-row justify-center items-center gap-2 mt-2">
          <div className="w-[200px] h-[200px]">
            <img
              src={"https://via.placeholder.com/500x300?text=Raffle+1"}
              alt={""}
              className="w-full h-full object-cover sm:object-contain"
            />
          </div>
            <div className="flex flex-col justify-between md:h-full">
              <div>
                <p className="text-dark max-w-xs">Precio de ticket: <b className="text-primary">${10}</b></p>
                <p className="text-dark max-w-xs">Total de tickets seleccionados: <b className="text-primary">{ticketsSelected.length}</b></p>
                <p className="text-dark max-w-xs">Número de Tickets seleccionados: <br/> <b className="text-primary">{ticketsSelected.map(addCommaIfNotLast)}</b></p>
              </div>
              <div>
               {ticketsSelected.length > 0 && <p className="text-end my-1"><span className="bg-primary text-white p-1 rounded">Total a pagar: ${10 * ticketsSelected.length}</span></p>}
              </div>
            </div>
          </div>
          </div>
    <FormPayment handleDataPayment={handleDataPayment} mount={ticketsSelected.length}/>
  </>
 
};
