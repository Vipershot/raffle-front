// import { useEffect, useState } from "react";
// import Tickets from "../../molecules/Tickets/Tickets";
// import { LayoutContent } from "../../molecules/LayoutContent/LayoutContent";
// import { getLowestPrice, getAward } from "../../../services/awards";
// import { AppButton } from "../../atoms/AppButton/AppButton";
// import { useNavigate, useParams } from "react-router-dom";
// import { TitleText } from "../../atoms/TitleText/TitleText";
// import { addCommaIfNotLast } from "../../../utils/ticktes";
// import { IAward } from "../../../interface/awards";
// import { getDayComplete } from "../../../utils/date";

// const initialState: IAward = {
//   cover: "",
//   createdAt: new Date(),
//   description: "",
//   endDate: new Date(),
//   id: "",
//   ticketPrice: "",
//   title: "",
//   totalTickets: 0,
//   updatedAt: new Date(),
//   userId: "",
//   status: "string",
//   tickets: [],
// };

// const AwardDetails = () => {
//   const { id } = useParams();
//   const [award, setAward] = useState<IAward>(initialState);
//   const [ticketsSelected, setTicketsSelected] = useState<number[]>([]);
//   const navigate = useNavigate();
//   const [dataFooter, setDataFooter] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const loadAwards = async () => {
//     setLoading(true);
//     try {
      
//       const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
//       if (!uuidRegex.test(id as string)) {
//         throw new Error("ID inválido");
//       }

//       const mostRecent = await getLowestPrice();
//       const awardDetail: IAward = await getAward(id as string);

//       setAward(awardDetail);
//       setDataFooter(mostRecent);
//     } catch (error) {
//       console.error(error);
      
//       navigate("/404");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTickets = (newTicket: number) => {
//     if (!ticketsSelected.includes(newTicket)) {
//       setTicketsSelected([...ticketsSelected, newTicket]);
//     } else {
//       const popTicket = ticketsSelected.filter((item) => item !== newTicket);
//       setTicketsSelected(popTicket);
//     }
//   };

//   useEffect(() => {
//     loadAwards();
//   }, [id]);

//   return (
//     <>
//       <div className="flex justify-center mt-5 gap-2">
//         <div className="w-[50%] h-[200px]">
//           <img
//             src={award?.cover}
//             alt={award?.title}
//             className="w-full h-full object-cover sm:object-contain"
//           />
//         </div>
//         <div className="w-[40%]">
//           <h2 className="text-dark font-bold text-xl">{award?.title}</h2>
//           <p>Precio: ${award?.ticketPrice}</p>
//           <p>Bs.F: 512,57</p>
//           <p className="text-dark">Descripción: {award?.description}</p>
//           <p className="text-dark">Fecha: {getDayComplete(award.endDate)}</p>
//         </div>
//       </div>
//       <LayoutContent
//         title="Tickets"
//         dataFooter={dataFooter}
//         loading={loading}
//         titleFooter="Relacionados con tu búsqueda"
//       >
//         <div className="max-h-[500px] overflow-y-auto custom-scrollbar">
//           {award.tickets && (
//             <Tickets
//               onClick={handleTickets}
//               ticketsBuy={award?.tickets.map((item) => Number(item.ticketNumber))}
//             />
//           )}
//         </div>
//         {ticketsSelected.length > 0 && (
//           <div
//             className="w-full bg-white border flex flex-col  p-10"
//             style={{ position: "sticky", bottom: 0 }}
//           >
//             <TitleText text="Detalle de tickets" />
//             <div className="flex flex-col md:flex-row justify-center items-center gap-2">
//               <div className="w-[200px] h-[200px]">
//                 <img
//                   src={award.cover}
//                   alt=""
//                   className="w-full h-full object-cover sm:object-contain"
//                 />
//               </div>
//               <div className="flex flex-col justify-between md:h-full">
//                 <div>
//                   <p className="text-dark max-w-xs">
//                     Precio de ticket: ${award.ticketPrice}
//                   </p>
//                   <p className="text-dark max-w-xs">
//                     Total de tickets seleccionados: {ticketsSelected.length}
//                   </p>
//                   <p className="text-dark max-w-xs">
//                     Numero de Tickets seleccionados:{" "}
//                     {ticketsSelected.map(addCommaIfNotLast)}
//                   </p>
//                 </div>
//                 <div>
//                   {ticketsSelected.length > 0 && (
//                     <p className="text-end my-1">
//                       <span className="bg-primary text-white p-1 rounded">
//                         Precio: $
//                         {Number(award.ticketPrice) * ticketsSelected.length}
//                       </span>
//                     </p>
//                   )}
//                   <AppButton
//                     size="full"
//                     title="Comprar"
//                     onClick={() =>
//                       navigate(`/payment/${id}`, {
//                         state: { ticketsSelected, award },
//                       })
//                     }
//                     disabled={ticketsSelected.length === 0}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </LayoutContent>
//     </>
//   );
// };

// export default AwardDetails;

// import { useEffect, useState } from "react";
// import Tickets from "../../molecules/Tickets/Tickets";
// import { LayoutContent } from "../../molecules/LayoutContent/LayoutContent";
// import { getLowestPrice, getAward } from "../../../services/awards";
// import { getExchangeRate } from "../../../services/awards"; // Importa el servicio
// import { AppButton } from "../../atoms/AppButton/AppButton";
// import { useNavigate, useParams } from "react-router-dom";
// import { TitleText } from "../../atoms/TitleText/TitleText";
// import { addCommaIfNotLast } from "../../../utils/ticktes";
// import { IAward } from "../../../interface/awards";
// import { getDayComplete } from "../../../utils/date";
// import createNumbersArray from "../../../utils/numbersArray";


// const AwardDetails = () => {
//   const {id} = useParams()
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(false);
//   const [award, setAward] = useState<IAward | null>(null);
//   const [exchangeRate, setExchangeRate] = useState<number>(0); 
//   //TICKETS
//   const [totalTickets, setTotalTickets] = useState<{state:boolean; number:number}[] | null>(null)
//   const [ticketsSelected, setTicketsSelected] = useState<number[]>([]);
//   //DATA FOOTER
//   const [dataFooter, setDataFooter] = useState([]);

//   const loadExchangeRate = async () => {
//     try {
//       const rate = await getExchangeRate(); 
//       setExchangeRate(rate);
//     } catch (error) {
//       console.error("Error obteniendo la tasa de cambio:", error);
//     }
//   }

//   const loadAwards = async () => {
//     setLoading(true);
//     try {
//       const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
//       if (!uuidRegex.test(id as string)) {
//         throw new Error("ID inválido");
//       }

//       const mostRecent = await getLowestPrice();
//       const awardDetail: IAward = await getAward(id as string);
//       const numbers = createNumbersArray(awardDetail.totalTickets);
//       const numbersState = numbers.map((item) => ({ state: false, number: item }));
//       setTotalTickets(numbersState)
//       setAward(awardDetail)
//       setDataFooter(mostRecent);
//       setLoading(false);
//       setAward(awardDetail);
//       setDataFooter(mostRecent);
//     } catch (error) {
//       console.error(error);
//       navigate("/404");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleTickets = (newTicket: number) => {
//     if (!ticketsSelected.includes(newTicket)) {
//       setTicketsSelected([...ticketsSelected, newTicket]);
//     } else {
//       const popTicket = ticketsSelected.filter((item) => item !== newTicket);
//       setTicketsSelected(popTicket);
//     }
//   };
//   const priceInBolivars = award && Number(award.ticketPrice) * exchangeRate;

//   useEffect(() => {
// loadExchangeRate(); 
//     setTotalTickets(null)
//     setTicketsSelected([])
//     loadAwards();
 
//   },[id]);

//   return (
//   <div>
//     {
//       award ?     <div>
//       <div className="flex justify-center mt-5 gap-2">
//         <div className="w-[50%] h-[200px]">
//           <img
//             src={award?.cover}
//             alt={award?.title}
//             className="w-full h-full object-cover sm:object-contain"
//           />
//         </div>
//         <div className="w-[40%]">
//           <h2 className="text-dark font-bold text-xl">{award?.title}</h2>
//           <p>Precio: ${award?.ticketPrice}</p>
//           <p>Bs.F: {priceInBolivars && priceInBolivars.toFixed(2)}</p>
//           <p className="text-dark">Descripción: {award?.description}</p>
//           <p className="text-dark">Fecha: {getDayComplete(award.endDate)}</p>
//         </div>
//       </div>
//       <LayoutContent
//         title="Tickets"
//         dataFooter={dataFooter}
//         loading={loading}
//         titleFooter="Relacionados con tu búsqueda">
//         <div className="max-h-[500px] overflow-y-auto custom-scrollbar "> 
//           {award.tickets && totalTickets &&  <Tickets onClick={handleTickets} ticketsBuy={award?.tickets.map(item => Number(item.ticketNumber))} totalTickets={totalTickets} handleTickets={(data)=> setTotalTickets(data)}/>}
//         </div>
//     {ticketsSelected.length > 0  && <div className="w-full bg-white border flex flex-col  p-10" style={{position:'sticky', bottom:0}}>
//           <TitleText text="Detalle de tickets" />
        
//           <div className="flex flex-col md:flex-row justify-center items-center gap-2">
//           <div className="w-[200px] h-[200px] ">
//             <img
//               src={award.cover}
//               alt={""}
//               className="w-full h-full object-cover sm:object-contain"
//             />
//             </div>
//           )}
//         </div>
//         {ticketsSelected.length > 0 && (
//           <div
//             className="w-full bg-white border flex flex-col  p-10"
//             style={{ position: "sticky", bottom: 0 }}
//           >
//             <TitleText text="Detalle de tickets" />
//             <div className="flex flex-col md:flex-row justify-center items-center gap-2">
//               <div className="w-[200px] h-[200px]">
//                 <img
//                   src={award.cover}
//                   alt=""
//                   className="w-full h-full object-cover sm:object-contain"
//                 />
//               </div>
//               <div className="flex flex-col justify-between md:h-full">
//                 <div>
//                   <p className="text-dark max-w-xs">
//                     Precio de ticket: ${award.ticketPrice}
//                   </p>
//                   <p className="text-dark max-w-xs">
//                     Precio de ticket en Bs.F: {priceInBolivars && priceInBolivars.toFixed(2)}
//                   </p>
//                   <p className="text-dark max-w-xs">
//                     Total de tickets seleccionados: {ticketsSelected.length}
//                   </p>
//                   <p className="text-dark max-w-xs">
//                     Numero de Tickets seleccionados:{" "}
//                     {ticketsSelected.map(addCommaIfNotLast)}
//                   </p>
//                 </div>
//                 <div>
//                   {ticketsSelected.length > 0 && (
//                     <p className="text-end my-1">
//                       <span className="bg-primary text-white p-1 rounded">
//                         Precio: $
//                         {Number(award.ticketPrice) * ticketsSelected.length}
//                       </span>
//                       <span className="bg-primary text-white p-1 rounded">
//                         Precio: Bs.F
//                         {priceInBolivars && Number(priceInBolivars.toFixed(2)) * ticketsSelected.length}
//                       </span>
//                     </p>
//                   )}
//                   <AppButton
//                     size="full"
//                     title="Comprar"
//                     onClick={() =>
//                       navigate(`/payment/${id}`, {
//                         state: { ticketsSelected, award },
//                       })
//                     }
//                     disabled={ticketsSelected.length === 0}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </LayoutContent>
      
//       <> : <h1>Cargando...</h1>
      
      
//     };
  

  
  
// };


// export default AwardDetails;

import { useEffect, useState } from "react";
import Tickets from "../../molecules/Tickets/Tickets";
import { LayoutContent } from "../../molecules/LayoutContent/LayoutContent";
import { getLowestPrice, getAward } from "../../../services/awards";
import { getExchangeRate } from "../../../services/awards"; // Importa el servicio
import { AppButton } from "../../atoms/AppButton/AppButton";
import { useNavigate, useParams } from "react-router-dom";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { addCommaIfNotLast } from "../../../utils/ticktes";
import { IAward } from "../../../interface/awards";
import { getDayComplete } from "../../../utils/date";
import createNumbersArray from "../../../utils/numbersArray";

const AwardDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [award, setAward] = useState<IAward | null>(null);
  const [exchangeRate, setExchangeRate] = useState<number>(0);
  const [totalTickets, setTotalTickets] = useState<
    { state: boolean; number: number }[] | null
  >(null);
  const [ticketsSelected, setTicketsSelected] = useState<number[]>([]);
  const [dataFooter, setDataFooter] = useState([]);

  const loadExchangeRate = async () => {
    try {
      const rate = await getExchangeRate();
      setExchangeRate(rate);
    } catch (error) {
      console.error("Error obteniendo la tasa de cambio:", error);
    }
  };

  const loadAwards = async () => {
    setLoading(true);
    try {
      const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
      if (!uuidRegex.test(id as string)) {
        throw new Error("ID inválido");
      }

      const mostRecent = await getLowestPrice();
      const awardDetail: IAward = await getAward(id as string);
      const numbers = createNumbersArray(awardDetail.totalTickets);
      const numbersState = numbers.map((item) => ({ state: false, number: item }));
      setTotalTickets(numbersState);
      setAward(awardDetail);
      setDataFooter(mostRecent);
    } catch (error) {
      console.error(error);
      navigate("/404");
    } finally {
      setLoading(false);
    }
  };

  const handleTickets = (newTicket: number) => {
    if (!ticketsSelected.includes(newTicket)) {
      setTicketsSelected([...ticketsSelected, newTicket]);
    } else {
      const popTicket = ticketsSelected.filter((item) => item !== newTicket);
      setTicketsSelected(popTicket);
    }
  };

  const priceInBolivars =
    award && exchangeRate ? Number(award.ticketPrice) * exchangeRate : 0;

  useEffect(() => {
    loadExchangeRate();
    setTotalTickets(null);
    setTicketsSelected([]);
    loadAwards();
  }, [id]);

  if (loading) return <h1>Cargando...</h1>;

  if (!award) return <h1>No se encontró el premio</h1>;

  return (
    <>
      {award ? (
        <div>
          <div className="flex flex-col md:flex-row justify-center items-center mt-5">
            <div className="h-[200px] md:h-[400px] w-[100%] md:w-[50%]">
              <img
                src={award?.cover}
                alt={award?.title}
                className="w-full h-full object-contain mt-4"
              />
            </div>
            <div className="w-[100%] md:w-[50%] flex flex-col items-center p-2 mt-6 md:mt-0 mb-2">
              <div className="w-[90%] flex flex-col gap-2">
                <h2 className="font-bold text-[16px] md:text-xl">{award?.title}</h2>
                <p className="text-dark font-bold text-[13px] md:text-[18px]">
                  Fecha: {getDayComplete(award.endDate)}
                </p>
                <p className="text-dark text-[13px] font-bold md:text-[16px]">
                  Precio: ${award?.ticketPrice}
                </p>
                <p className="text-dark text-[13px] md:text-[16px]">
                  Descripción: {award?.description}
                </p>
              </div>
            </div>
          </div>
          <LayoutContent
            title="Tickets"
            dataFooter={dataFooter}
            loading={loading}
            titleFooter="Relacionados con tu búsqueda"
          >
            <div className="max-h-[500px] overflow-y-auto custom-scrollbar flex justify-between">
              {award.tickets && totalTickets && (
                <Tickets
                  onClick={handleTickets}
                  ticketsBuy={award?.tickets.map((item) => Number(item.ticketNumber))}
                  totalTickets={totalTickets}
                  handleTickets={(data) => setTotalTickets(data)}
                />
              )}
            </div>
            {ticketsSelected.length > 0 && (
              <div
                className="w-full bg-white border flex flex-col p-6"
                style={{ position: "sticky", bottom: 0 }}
              >
                <TitleText text="Detalle de tickets" />
                <div className="flex flex-col md:flex-row justify-evenly items-center gap-2">
                  <div className="w-[200px] h-[200px]">
                    <img
                      src={award.cover}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col justify-between md:h-full">
                    <div>
                      <p className="text-dark max-w-xs">
                        Precio de ticket: $
                        <b className="text-primary">{award.ticketPrice}</b>
                      </p>
                      <p className="text-dark max-w-xs">
                        Total de tickets seleccionados:{" "}
                        <b className="text-primary">{ticketsSelected.length}</b>
                      </p>
                      <p className="text-dark max-w-xs">
                        Número de Tickets seleccionados:{" "}
                        <b className="text-primary">
                          {ticketsSelected.map(addCommaIfNotLast)}
                        </b>
                      </p>
                    </div>
                    <div>
                      <p className="text-dark max-w-xs">
                        Precio de ticket en Bs.F: {priceInBolivars.toFixed(2)}
                      </p>
                      <p className="text-end my-1">
                        <span className="bg-primary text-white p-1 rounded">
                          Precio Total: $
                          {(Number(award.ticketPrice) * ticketsSelected.length).toFixed(2)}
                        </span>
                        <span className="bg-primary text-white p-1 rounded">
                          Precio Total en Bs.F:{" "}
                          {(priceInBolivars * ticketsSelected.length).toFixed(2)}
                        </span>
                      </p>
                      <AppButton
                        size="full"
                        title="Comprar"
                        onClick={() =>
                          navigate(`/payment/${id}`, {
                            state: { ticketsSelected, award },
                          })
                        }
                        disabled={ticketsSelected.length === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </LayoutContent>
        </div>
      ) : null}
    </>

  );

}
  

export default AwardDetails;




