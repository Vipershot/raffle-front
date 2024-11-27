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
  

  export type ITickets = IAwardDetail[]