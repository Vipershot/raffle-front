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


const initialState =  {
  cover:        '',
  createdAt:    new Date(),
  description: '',
  endDate:     new Date(),
  id:          '',
  ticketPrice: '',
  title:       '',
  totalTickets: 0,
  updatedAt:    new Date(),
  userId:      '',
  status: 'string',
  tickets: []
 }
const AwardDetails = () => {
  const {id} = useParams()
  const [award, setAward] = useState<IAward>(initialState);
  const [ticketsSelected, setTicketsSelected] = useState<number[]>([]);
  const navigate = useNavigate();
  const [dataFooter, setDataFooter] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAwards = async () => {
    setLoading(true);
    const mostRecent = await getLowestPrice();
    const awardDetail: IAward = await getAward(id as string)
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
    loadAwards();
  },[id]);

  return (
    <>
      <div className="flex justify-center mt-5 gap-2">
        <div className="w-[50%] h-[200px]">
          <img
            src={award?.cover}
            alt={award?.title}
            className="w-full h-full object-cover sm:object-contain"
          />
        </div>
        <div className="w-[40%]">
          <h2 className="text-dark font-bold text-xl">
            {award?.title}
          </h2>
          <p>Precio: ${award?.ticketPrice}</p>
          <p className="text-dark">Descripción: {award?.description}</p>
          <p className="text-dark"> Fecha: {getDayComplete(award.endDate)}</p>
        </div>
      </div>
      <LayoutContent
        title="Tickets"
        dataFooter={dataFooter}
        loading={loading}
        titleFooter="Relacionados con tu búsqueda"
      >
        <div className="max-h-[500px] overflow-y-auto custom-scrollbar "> 
          {award.tickets &&  <Tickets onClick={handleTickets} ticketsBuy={award?.tickets.map(item => Number(item.ticketNumber))}/>}
        </div>
    {ticketsSelected.length > 0  && <div className="w-full bg-white border flex flex-col  p-10" style={{position:'sticky', bottom:0}}>
          <TitleText text="Detalle de tickets" />
        
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="w-[200px] h-[200px] ">
            <img
              src={award.cover}
              alt={""}
              className="w-full h-full object-cover sm:object-contain"
            />
          </div>
            <div className="flex flex-col justify-between md:h-full">
              <div>
                <p className="text-dark max-w-xs">Precio de ticket: ${award.ticketPrice}</p>
                <p className="text-dark max-w-xs">Total de tickets seleccionados: {ticketsSelected.length}</p>
                <p className="text-dark max-w-xs">Numero de Tickets seleccionados: {ticketsSelected.map(addCommaIfNotLast)}</p>
              </div>
              <div>
               {ticketsSelected.length > 0 && <p className="text-end my-1"><span className="bg-primary text-white p-1 rounded">Precio: ${Number(award.ticketPrice) * ticketsSelected.length}</span></p>}
                <AppButton size="full" title="Comprar" onClick={()=>navigate(`/payment/${id}`,{state:{ticketsSelected, award}})} disabled={ticketsSelected.length === 0}/>
              </div>
            </div>
          </div>
        </div>}
      </LayoutContent>
    </>
  );
};

export default AwardDetails;
