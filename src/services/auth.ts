import { axiosRaffle } from "../config/axios"
import { IUserAuth } from "../interface/login"

export const registerUser = async(data:IUserAuth) => {
    try {
        const response =  await axiosRaffle.post(`/users/signup`, data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const loginUser = async(data:IUserAuth) => {
    try {
        const response =  await axiosRaffle.post(`/users/login`, data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error
    }
}