import { Link } from "react-router-dom";
import { IAward } from "../../../interface/awards";
import { getDayComplete } from "../../../utils/date";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { IoTicketOutline } from "react-icons/io5";

export const CardProduct = ({
  description,
  totalTickets,
  ticketPrice,
  endDate,

  cover,
  id,
}: IAward) => {



  const validateAvailable = () => {
    if (totalTickets) {
      if (totalTickets == totalTickets ) return "Disponible";
      if (totalTickets < 50) return "Estas a tiempo";
      if (totalTickets < 71) return "Quedan pocos";
    }
  };

  return (
    <div className="bg-white col-span-1 relative md:p-5 flex flex-col gap-2  justify-between h-full p-3">
    <div>
    <h1 className="font-bold text-white md:text-3xl bg-primary rounded-[100%] px-2 py-1  md:px-3 md:py-3 absolute">${ticketPrice.substring(0, 1)}</h1>
      <Link to={`/award/${id}`}>
        <img
          className="h-[100px] md:h-[200px] w-[100%] mb-2 object-contain"
          src={cover}
          alt={description}
        />
          <h2 className="text-[14px] md:text-xl text-dark font-semibold">{description.substring(0, 50)}</h2>

      </Link>
    </div>
    <div className="flex flex-col md:gap-2">
        <div className="flex items-center justify-between">
          <h3 className="text-[12px] md:text-xl text-secondary font-semibold italic">{validateAvailable()}</h3>
          <h3 className="md:text-xl text-primary font-semibold">{getDayComplete(endDate)}</h3>
        </div>
        <Link to={`/award/${id}`}>
          <AppButton size="full" title={<div className="flex gap-2 justify-center items-center"><IoTicketOutline
              className="cursor-pointer text-white"
              size={22}
            />Tickets</div>} />
        </Link>
      </div>
    </div>
  );
};

