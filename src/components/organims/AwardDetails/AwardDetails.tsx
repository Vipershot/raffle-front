import  { useEffect, useState } from "react";
import Tickets from "../../molecules/Tickets/Tickets";
import { LayoutContent } from "../../molecules/LayoutContent/LayoutContent";
import { getLowestPrice, getAward } from "../../../services/awards";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { useNavigate, useParams } from "react-router-dom";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { addCommaIfNotLast } from "../../../utils/ticktes";
import { ITickets } from "../../../interface/awards";

const AwardDetails = () => {
  const {id} = useParams()
  const [ticketsBuy, setTicketsBuy] = useState<number[]>([]);
  const [ticketsSelected, setTicketsSelected] = useState<number[]>([]);
  const navigate = useNavigate();
  const [dataFooter, setDataFooter] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadAwards = async () => {
    setLoading(true);
    const mostRecent = await getLowestPrice();
    const awardDetail: ITickets = await getAward(id as string)
    setTicketsBuy(awardDetail.map(item => Number(item.ticketNumber)))
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
  },[]);

  return (
    <>
      <div className="flex justify-center mt-5 gap-2">
        <div className="w-[50%] h-[200px]">
          <img
            src={""}
            alt={""}
            className="w-full h-full object-cover sm:object-contain"
          />
        </div>
        <div className="w-[40%]">
          <h2 className="text-dark font-bold text-xl">
            {"carouselItem.title"}
          </h2>
          <p>Precio: ${"carouselItem.price"}</p>
          <p className="text-dark">Descripción: {"carouselItem.description"}</p>
          <p className="text-dark"> Fecha: {"carouselItem.date"}</p>
        </div>
      </div>
      <LayoutContent
        title="Tickets"
        dataFooter={dataFooter}
        loading={loading}
        titleFooter="Relacionados con tu busqueda"
      >
        <div className="max-h-[500px] overflow-y-auto custom-scrollbar ">
          <Tickets onClick={handleTickets} ticketsBuy={ticketsBuy}/>
        </div>
    {ticketsSelected.length > 0  && <div className="w-full bg-white border flex flex-col  p-10" style={{position:'sticky', bottom:0}}>
          <TitleText text="Detalle de tickets" />
        
          <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          <div className="w-[200px] h-[200px]">
            <img
              src={""}
              alt={""}
              className="w-full h-full object-cover sm:object-contain"
            />
          </div>
            <div className="flex flex-col justify-between md:h-full">
              <div>
                <p className="text-dark max-w-xs">Precio de ticket: ${10}</p>
                <p className="text-dark max-w-xs">Total de tickets seleccionados: {ticketsSelected.length}</p>
                <p className="text-dark max-w-xs">Numero de Tickets seleccionados: {ticketsSelected.map(addCommaIfNotLast)}</p>
              </div>
              <div>
               {ticketsSelected.length > 0 && <p className="text-end my-1"><span className="bg-primary text-white p-1 rounded">Precio: ${10 * ticketsSelected.length}</span></p>}
                <AppButton size="full" title="Comprar" onClick={()=>navigate(`/payment/123`,{state:{ticketsSelected}})} disabled={ticketsSelected.length === 0}/>
              </div>
            </div>
          </div>
        </div>}
      </LayoutContent>
    </>
  );
};

export default AwardDetails;
