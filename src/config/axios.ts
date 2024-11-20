import axios from "axios";

export const axiosRaffle = axios.create({
    baseURL: 'http://server.evolutionygo.com:3313/api/v1',
    headers: {
      'Content-Type': 'application/json',
    },
  });