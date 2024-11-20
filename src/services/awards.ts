
import { axiosRaffle } from '../config/axios'

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