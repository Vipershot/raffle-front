/* import React, { createContext, useState, ReactNode } from "react";
import { IAward } from "../interface/awards";

interface TicketType {
    award: IAward
    ticketsNumber:number[]
}

const initialState: TicketType = {
ticketsNumber: [],
award: {
    cover:"",
    createdAt:new Date(), 
    description:"",
    endDate: new Date (),
    id:"",
    ticketPrice:"",
    totalTickets:0,
    title:"",
    updatedAt: new Date (),
    userId: ""
}
}

const TicketContext = createContext<TicketType>(initialState);

interface TickectProviderProps {
    children: ReactNode;
  }

const TicketProvider: React.FC<TickectProviderProps> = ({ children }) => {
  const [dataAward, setDataAward] = useState<TicketType>(initialState);
  return(
    <TicketContext.Provider value={{dataAward, setDataAward}}>
        {children}
    </TicketContext.Provider>
  )
};
 */

import React, { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
import { IAward } from "../interface/awards";

interface TicketType {
  award: IAward;
  ticketsNumber: number[];
}

interface TicketContextType {
  dataAward: TicketType;
  setDataAward: Dispatch<SetStateAction<TicketType>>;
}

const initialState: TicketType = {
  ticketsNumber: [],
  award: {
    cover: "",
    createdAt: new Date(),
    description: "",
    endDate: new Date(),
    id: "",
    ticketPrice: "",
    totalTickets: 0,
    title: "",
    updatedAt: new Date(),
    userId: "",
  },
};

const TicketContext = createContext<TicketContextType>({
  dataAward: initialState,
  setDataAward: () => {},
});

interface TicketProviderProps {
  children: ReactNode;
}

const TicketProvider: React.FC<TicketProviderProps> = ({ children }) => {
  const [dataAward, setDataAward] = useState<TicketType>(initialState);

  return (
    <TicketContext.Provider value={{ dataAward, setDataAward }}>
      {children}
    </TicketContext.Provider>
  );
};

export { TicketContext, TicketProvider };
