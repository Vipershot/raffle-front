import { AppButton } from "../../atoms/AppButton/AppButton";
import { DetailProfile } from "../../molecules/DetailProfile/DetailProfile";
import { useState } from "react";
import { TicketsPopoverOnline } from "../../molecules/TicktesPopoverOnline/TicketsPopoverOnline";
import { EditProfile } from "../../molecules/EditProfile/EditProfile";
import { DetailsTicketsPopover } from "../../molecules/DetailsTicketsPopover/DetailsTicketsPopover";
import { IDetailBuyTicket } from "../../../interface/awards";
interface Props {
  onClick: () => void;
  profile: { name: string; email: string };
}


export const Popover = ({ onClick, profile }: Props) => {
  const [popoverName, setPopoverName] = useState('online')
  const [data, setData] = useState<IDetailBuyTicket | undefined >(undefined);
  const handlePopover =(item: string, data?:IDetailBuyTicket )=>{
    setPopoverName(item)
    setData(data)
  }
  return (
    <div className="absolute top-7 mt-2 -right-10 md:top-full md:right-0 w-[100vw] md:w-[450px]  bg-white border border-gray-300 rounded shadow-md p-5 z-10">
      <DetailProfile handlePopover={handlePopover} profile={profile} />
      <div className="mt-2 h-0.5 bg-disabled"></div>

     {popoverName === "online" && <TicketsPopoverOnline handlePopover={handlePopover}/>}
     {popoverName === "profile" && <EditProfile handlePopover={handlePopover}/>}
     {popoverName === "details" && <DetailsTicketsPopover data={data}  handlePopover={handlePopover}/>}
     <div className="mt-2 mb-2 h-0.5 bg-disabled"></div>
      <AppButton size="full" title="Cerrar sesion" onClick={onClick} />
    </div>
  );
};
