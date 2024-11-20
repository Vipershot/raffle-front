
import { axiosRaffle } from '../axios/axios'

export const getMostRecent = async() =>{
    try {
        const response =  await axiosRaffle.get('/raffles/most-recent')
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const getLowestPrice = async() =>{
    try {
        const response =  await axiosRaffle.get('/raffles/lowest-prices')
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}