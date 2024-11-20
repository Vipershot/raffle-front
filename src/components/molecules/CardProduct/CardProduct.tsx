import { Link } from "react-router-dom";
import { IAward } from "../../../interface/awards";

export const CardProduct = ({
  description,
  totalTickets,
  ticketPrice,
  endDate,
  createdAt,
  cover,
  id,
}: IAward) => {
  const validateAvailable = () => {
    if (totalTickets) {
      if (totalTickets < 20) return "Full disponible";
      if (totalTickets < 50) return "Disponible";
      if (totalTickets < 71) return "Quedan pocos disponibles";
    }
  };
  const getDayComplete = (day: Date) => {
    const DT = new Date(day);
    const D = DT.getDay();
    const M = DT.toLocaleString("es-ES", { month: "short", year: "numeric" });
    const completeDay = `${D} ${M}`;
    return completeDay;
  };

  return (
    <div className="bg-light">
     
        <img src={cover} alt={description} />
        <div className="flex flex-col p-3">
        <Link to={`/carousel/${id}`} >
        <h2 className="text-sm text-primary">{description}</h2>
      </Link>

          <h3 className="text-xs">
            Cantidad: <b className="text-lg">{totalTickets}</b>
          </h3>
          <h3 className="text-xs">
            USD$ <b className="text-lg">{ticketPrice}</b>
          </h3>
          <h3 className="text-xs">
            Desde <b style={{ fontSize: 14 }}>{getDayComplete(createdAt)}</b> al{" "}
            <b style={{ fontSize: 14 }}>{getDayComplete(endDate)}</b>
          </h3>
          <h3>{validateAvailable()}</h3>
        </div>
    </div>
  );
};
