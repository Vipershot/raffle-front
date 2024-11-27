import { Link } from "react-router-dom";
import { IAward } from "../../../interface/awards";
import { getDayComplete } from "../../../utils/date";

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
 

  return (
    <div className="bg-white col-span-1">
      <Link to={`/award/${id}`} >
        <img src={cover} alt={description}  />
      </Link>
        <div className="flex flex-col p-3">
        <Link to={`/award/${id}`} >
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
