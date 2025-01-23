import axios from "axios";

export const axiosRaffle = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  export const fetchDolarRate = async (): Promise<number> => {
    try {
      const response = await axios.get(
        "https://pydolarve.org/api/v1/dollar?page=dolartoday"
      );
  
    
      const rate = response?.data?.monitors.bcv.price || 0;
      return rate;
    } catch (error) {
      console.error("Error fetching dolar rate from external API:", error);
      throw error;
    }
  };