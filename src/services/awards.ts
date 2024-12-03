
import { axiosRaffle, fetchDolarRate } from '../config/axios'

export const getAward= async(raffleId: string) =>{
    try {
        const response =  await axiosRaffle.get(`/raffles/${raffleId}`)
        return response.data
    } catch (error) {
        console.log(error)
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
        console.log(error)
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
        console.log(error)
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
      console.error("Error obteniendo la tasa de cambio de la API interna:", error);
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
      console.error("Error en el servicio combinado de tasas de cambio:", error);
  
      
      return 0;
    }
  };

  export const postBuyTicket = async (raffleId: string, numbers: number[]): Promise<number> => {
    try {
      console.log("URL:", `/api/v1/raffles/${raffleId}/buy-ticket`);
      console.log("Payload:", { numbers });
  
      const response = await axiosRaffle.post(
        `/api/v1/raffles/${raffleId}/buy-ticket`,
        { numbers },
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
      console.error("Error al enviar la compra de ticket a la API interna:", error);
      throw error;
    }
  };
  
  
  