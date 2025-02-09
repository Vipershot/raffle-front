import { axiosRaffle } from "../config/axios"
import { IProfile } from "../interface/EditProfile"
import { IUserAuth } from "../interface/login"

export const registerUser = async(data:IUserAuth) => {
    try {
        const response =  await axiosRaffle.post(`/users/signup`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

export const loginUser = async(data:IUserAuth) => {
    try {
        const response =  await axiosRaffle.post(`/users/login`, data)
        return response.data
    } catch (error) {
        throw error
    }
}

export const getProfile = async() => {
    try {
        const response =  await axiosRaffle.get(`/users/profile`, {
            headers:{
               Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
      
        return response.data
    } catch (error) {
        throw error
    }
}

export const patchProfile = async(data:Partial<IProfile>) => {
    try {
        const response =  await axiosRaffle.patch(`/users/`, data, {
            headers:{
               Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        },)
      
        return response.data
    } catch (error) {
        throw error
    }
}