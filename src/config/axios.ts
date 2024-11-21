import axios from "axios";

export const axiosRaffle = axios.create({
    baseURL: 'https://server.evolutionygo.com:3313/api/v1',
    headers: {
      'Content-Type': 'application/json',
    },
  });