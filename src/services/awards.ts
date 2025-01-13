
import { axiosRaffle, fetchDolarRate } from '../config/axios'

export const getAward= async(raffleId: string) =>{
    try {
        const response =  await axiosRaffle.get(`/raffles/${raffleId}`)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getMostRecent = async() =>{
    try {
        const response =  await axiosRaffle.get('/raffles/most-recent',{
            params:{
                limit:20
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}



export const getLowestPrice = async() =>{
    try {
        const response =  await axiosRaffle.get('/raffles/lowest-prices', {
            params:{
                limit:20
            }
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export const getExchangeRateFromInternal = async (): Promise<number> => {
    try {
      const response = await axiosRaffle.get("/raffles/most-recent", {
        params: {
          limit: 20,
        },
      });
  
      const exchangeRate = response?.data?.exchangeRate || 0;
      return exchangeRate;
    } catch (error) {
      throw error;
    }
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
  
      
      return 0;
    }
  };

  export const postBuyTicket = async (raffleId: string, numbers: {ticketNumbers:number[]}): Promise<number> => {
    try {
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
    } catch (error) {
      throw error;
    }
  };
  
  
  export const getTicketsBuyOnline = async() =>{
    try {
        const response =  await axiosRaffle.get('/raffles/not-drawn',  {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
            "Content-Type": "application/json", 
          },
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export const getTicketsBuy = async() =>{
  try {
      const response =  await axiosRaffle.get('/raffles',  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json", 
        },
      })
      return response.data
  } catch (error) {
      throw error
  }
}

export const getTicketsBuyFinished = async() =>{
  try {
      const response =  await axiosRaffle.get('/raffles/drawn',  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          "Content-Type": "application/json", 
        },
      })
      return response.data
  } catch (error) {
      throw error
  }
}