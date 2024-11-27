
import { axiosRaffle } from '../config/axios'

export const getAward= async(raffleId: string) =>{
    try {
        const response =  await axiosRaffle.get(`/raffles/${raffleId}/tickets`)
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