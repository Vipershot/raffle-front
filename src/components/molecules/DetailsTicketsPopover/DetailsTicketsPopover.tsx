import { IoIosArrowBack } from "react-icons/io";
import { TitleText } from "../../atoms/TitleText/TitleText";
import { IDetailBuyTicket } from "../../../interface/awards";
import { BsCalendar2Check } from "react-icons/bs";
import { TbClockHour1 } from "react-icons/tb";
import { PiMoneyWavyLight } from "react-icons/pi";
import { LiaAwardSolid } from "react-icons/lia";
import { getDayComplete, getHour } from "../../../utils/date";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { useNavigate } from "react-router-dom";
interface Props {
  handlePopover: (item: string) => void;
  data: IDetailBuyTicket | undefined;
}
export const DetailsTicketsPopover = ({ data, handlePopover }: Props) => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="flex items-center justify-between mt-3">
        <div className="flex gap-2 items-center cursor-pointer" onClick={() => handlePopover("online")}>
          <IoIosArrowBack
            className="text-lg text-gray-300 cursor-pointer hover:text-dark"
            size={18}
            
          />
          <TitleText text="Detalle de ticket" size="xs" />
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        {data?.tickets.map((item, index) => (
          <b
            key={index}
            className="text-white bg-info text-center text-sm"
            style={{
              borderRadius: "30px",
              padding: "4px 10px",
            }}
          >
            {item.ticketNumber}
          </b>
        ))}
      </div>
      <div className="flex flex-col gap-5 mt-5">
        <div className="flex items-center gap-2">
          <BsCalendar2Check
            className="text-lg text-primary"
            size={18}
          
          />
          <p className="font-bold text-dark">
          Fecha del Sorteo: <span className="font-light">{data && getDayComplete(data.endDate)}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <TbClockHour1
            className="text-lg text-primary"
            size={18}
          
          />
          <p className="font-bold text-dark">
          Hora del Sorteo: <span className="font-light">{data && getHour(data.endDate)}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <PiMoneyWavyLight
            className="text-lg text-primary"
            size={18}
          
          />
          <p className="font-bold text-dark">
          Precio total: <span className="font-light">${data && data.ticketPrice}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <LiaAwardSolid
            className="text-lg text-primary"
            size={18}
          
          />
          <p className="font-bold text-dark">
          Premio Principal: <span className="font-light">{data && data.title.substring(0, 25)}{data && data.title.length > 25 && '...' }</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <AppButton title="Tickets Disponibles" onClick={()=> navigate(`/award/${data?.id}`)} size="full" />
        </div>
      </div>
      
    </div>
  );
};
