export interface IAward {
    cover:        string;
    createdAt:    Date;
    description:  string;
    endDate:      Date;
    id:           string;
    ticketPrice:  string;
    ticketPriceBCV?: number;
    title?:        string;
    totalTickets: number;
    updatedAt?:    Date;
    userId?:       string;
    status?: string
    tickets?: Ticket[]
   }
   
   export interface IAwardDetail {
    id: string
    ticketNumber: number
    userId: string
    raffleId: string
    createdAt: string
    updatedAt: string
    deletedAt: string
  }
  
  
  export interface ITicket {
    id: string
    ticketNumber: string
    userId: string
    raffleId: string
    createdAt: string
    updatedAt: string
    deletedAt: string
  }
  

  export interface IDetailBuyTicket {
    cover:        string;
    description:  string;
    endDate:      Date;
    status:       string;
    ticketPrice:  string;
    tickets:      Ticket[];
    title:        string;
    totalTickets: string;
    id:string;
   }
   
   export interface Ticket {
    createdAt:    Date;
    id:           string;
    ticketNumber: string;
   }
  