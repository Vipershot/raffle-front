import  { useEffect, useState } from "react";
import Tickets from "../../molecules/Tickets/Tickets";
import { LayoutContent } from "../../molecules/LayoutContent/LayoutContent";
import { getLowestPrice, getAward } from "../../../services/awards";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { useNavigate, useParams } from "react-router-dom";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { addCommaIfNotLast } from "../../../utils/ticktes";
import { IAward } from "../../../interface/awards";
import { getDayComplete } from "../../../utils/date";
import createNumbersArray from "../../../utils/numbersArray";


const AwardDetails = () => {
  const {id} = useParams()
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [award, setAward] = useState<IAward | null>(null);
  //TICKETS
  const [totalTickets, setTotalTickets] = useState<{state:boolean; number:number}[] | null>(null)
  const [ticketsSelected, setTicketsSelected] = useState<number[]>([]);
  //DATA FOOTER
  const [dataFooter, setDataFooter] = useState([]);

  const loadAwards = async () => {
    setLoading(true);
    const mostRecent = await getLowestPrice();
    const awardDetail: IAward = await getAward(id as string)
    const numbers = createNumbersArray(awardDetail.totalTickets);
    const numbersState = numbers.map((item) => ({ state: false, number: item }));
    setTotalTickets(numbersState)
    setAward(awardDetail)
    setDataFooter(mostRecent);
    setLoading(false);
  };

  const handleTickets = (newTicket:number) => {
    if (!ticketsSelected.includes(newTicket)) {
      setTicketsSelected([...ticketsSelected, newTicket])
    }else{
      const popTicket = ticketsSelected.filter(item => item !== newTicket)
      setTicketsSelected(popTicket)
    }
  }

  useEffect(() => {
    setTotalTickets(null)
    setTicketsSelected([])
    loadAwards();
 
  },[id]);

  return (
    <>{
      award ?     <div>
      <div className="flex flex-col md:flex-row justify-center mt-5 gap-2">
        <div className="w-[100%] md:w-[50%] h-[200px]">
          <img
            src={award?.cover}
            alt={award?.title}
            className="w-full h-full object-contain mt-8"
          />
        </div>
        <div className="w-[100%] md:w-[40%] flex flex-col items-center p-4 mt-8 md:mt-0 mb-8">
          <div className="w-[90%] flex flex-col gap-2">
          <h2 className="text-dark font-bold text-[16px] md:text-xl">
            {award?.title}
          </h2>
          <p className="text-[13px] md:text-[16px]">Precio: ${award?.ticketPrice}</p>
          <p className="text-dark text-[13px] md:text-[16px]">Descripción: {award?.description}</p>
          <p className="text-dark text-[13px] md:text-[16px]"> Fecha: {getDayComplete(award.endDate)}</p>
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
          {award.tickets && totalTickets &&  <Tickets onClick={handleTickets} ticketsBuy={award?.tickets.map(item => Number(item.ticketNumber))} totalTickets={totalTickets} handleTickets={(data)=> setTotalTickets(data)}/>}
        </div>
    {ticketsSelected.length > 0  && <div className="w-full bg-white border flex flex-col p-6" style={{position:'sticky', bottom:0}}>
          <TitleText text="Detalle de tickets" />
        
          <div className="flex flex-col md:flex-row justify-evenly items-center gap-2">
          <div className="w-[200px] h-[200px] ">
            <img
              src={award.cover}
              alt={""}
              className="w-full h-full object-contain"
            />
          </div>
            <div className="flex flex-col justify-between md:h-full">
              <div>
                <p className="text-dark max-w-xs">Precio de ticket: $<b className="text-primary">{award.ticketPrice}</b></p>
                <p className="text-dark max-w-xs">Total de tickets seleccionados: <b className="text-primary">{ticketsSelected.length}</b></p>
                <p className="text-dark max-w-xs">Numero de Tickets seleccionados: <b className="text-primary">{ticketsSelected.map(addCommaIfNotLast)}</b></p>
              </div>
              <div>
               {ticketsSelected.length > 0 && <p className="text-end my-1"><span className="bg-primary text-white p-1 rounded">Precio: ${Number(award.ticketPrice) * ticketsSelected.length}</span></p>}
                <AppButton size="full" title="Comprar" onClick={()=>navigate(`/payment/${id}`,{state:{ticketsSelected, award}})} disabled={ticketsSelected.length === 0}/>
              </div>
            </div>
          </div>
        </div>}
      </LayoutContent>
    </div> : <h1>Cargando...</h1>
    }
  
    </>
  );
};

export default AwardDetails;
