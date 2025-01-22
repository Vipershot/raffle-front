
import { axiosRaffle, fetchDolarRate } from '../config/axios'

export const getAward= async(raffleId: string) =>{
        const response =  await axiosRaffle.get(`/raffles/${raffleId}`)
        return response.data
}

export const getMostRecent = async() =>{
        const response =  await axiosRaffle.get('/raffles/most-recent',{
            params:{
                limit:20
            }
        })
        return response.data
}

export const getLowestPrice = async() =>{
        const response =  await axiosRaffle.get('/raffles/lowest-prices', {
            params:{
                limit:20
            }
        })
        return response.data
}

export const getExchangeRateFromInternal = async (): Promise<number> => {
      const response = await axiosRaffle.get("/raffles/most-recent", {
        params: {
          limit: 20,
        },
      });
  
      const exchangeRate = response?.data?.exchangeRate || 0;
      return exchangeRate;
  };

  export const getExchangeRate = async (): Promise<number> => {
    try {
      
      const externalRate = await fetchDolarRate();
      if (externalRate > 0) {
        return externalRate;
      }
  
      
      const internalRate = await getExchangeRateFromInternal();
      return internalRate;
    } catch (error) {
      console.log(error)
      
      return 0;
    }
  };

  export const postBuyTicket = async (raffleId: string, numbers: {ticketNumbers:number[]}): Promise<number> => {

      const response = await axiosRaffle.post(
        `/raffles/${raffleId}/buy-ticket`,
        numbers,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json", 
          },
        }
      );
  
      const ticketId = response?.data?.ticketId || 0;
      return ticketId;

  };
  
  
  export const getTicketsBuyOnline = async() =>{

        const response =  await axiosRaffle.get('/raffles/not-drawn',  {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json", 
          },
        })
        return response.data

}

export const getTicketsBuy = async() =>{

      const response =  await axiosRaffle.get('/raffles',  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json", 
        },
      })
      return response.data

}

export const getTicketsBuyFinished = async() =>{

      const response =  await axiosRaffle.get('/raffles/drawn',  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json", 
        },
      })
      return response.data

}

export const getWinner = async(id:string) =>{

  const response =  await axiosRaffle.get(`/raffles/${id}/winners`,  {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      "Content-Type": "application/json", 
    },
  })
  return response.data

}