import { useEffect, useState } from "react";
import { FormPayment } from "../../molecules/FormPayment/FormPayment";
import { IFormPayment } from "../../../interface/metodsPayment";


export const Payment = () => {
  const [dataPayment, setDataPayment] = useState<IFormPayment>();

  const handleDataPayment = (data:IFormPayment) =>{
    setDataPayment(data)
  }

  useEffect(() => {
    if(dataPayment){
      console.log('Service', dataPayment)
    }
  }, [dataPayment]);

  return <>
    <FormPayment handleDataPayment={handleDataPayment}/>
  </>
 
};
