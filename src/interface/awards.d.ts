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
   