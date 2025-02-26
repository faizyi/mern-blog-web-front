import { axiosHandler } from "@/axios/axios"

export const signup = async (data) =>{
    try {
        const res = await axiosHandler.post("/user/register", data)
        return res
    } catch (error) {
        return error
    }
}

export const login = async (data) =>{
    try {
        const res = await axiosHandler.post("/user/login", data);
        return res
    } catch (error) {
        return error
    }
}

export const logout = async ()=>{
    try {
        const res = await axiosHandler.get("/user/logout");
        return res
    } catch (error) {
        return error
    }
}

export const getUserProfile = async () =>{
    try {
        const res = await axiosHandler.get("/user/profile")
        return res
    } catch (error) {
        return error
    }
}