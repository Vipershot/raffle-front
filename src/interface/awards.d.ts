export interface IAward {
    cover:        string;
    createdAt:    Date;
    description:  string;
    endDate:      Date;
    id:           string;
    ticketPrice:  string;
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
  
  export type IDetailBuyTicket =  {
    img:string;
    title:string;
    tickets:number[]
    buyDate: string
    endDate: string
    hour: string
    ticketPrice: string
  }