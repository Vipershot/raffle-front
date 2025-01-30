import { Link } from "react-router-dom";
import { IAward } from "../../../interface/awards";
import { getDayComplete } from "../../../utils/date";
import { AppButton } from "../../atoms/AppButton/AppButton";
import { IoTicketOutline } from "react-icons/io5";

export const CardProduct = ({
  description,
  ticketPrice,
  endDate,

  cover,
  id,
}: IAward) => {



  return (
    <div className="bg-white rounded-lg col-span-1 relative md:p-5 flex flex-col justify-between h-full p-3">
    <div>
    <h1 className="font-bold text-white md:text-2xl bg-primary border border-white border-1 border-dashed rounded-[100%] px-2 py-1  md:px-3 md:py-3 absolute">${ticketPrice}</h1>
      <Link to={`/award/${id}`}>
        <img
          className="h-[100px] md:h-[200px] w-[100%] mb-2 object-contain"
          src={cover}
          alt={description}
        />
          <h2 className="text-[14px] md:text-xl text-dark font-semibold">{description.substring(0, 50)} </h2>

      </Link>
    </div>
    <div className="flex flex-col md:gap-2">
        <div className="flex items-center justify-end flex-wrap">
          <h3 className="md:text-xl text-primary font-semibold">{getDayComplete(endDate)}</h3>
        </div>
        <Link to={`/award/${id}`}>
          <AppButton size="full" appearance="primary" title={<div className="flex gap-2 justify-center items-center hover:font-bold"><IoTicketOutline
              className="cursor-pointer text-white"
              size={22}
            />Tickets</div>} />
        </Link>
      </div>
    </div>
  );
};

