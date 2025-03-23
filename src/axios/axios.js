import axios from "axios";

export const axiosHandler = axios.create({
    baseURL: "https://blog-backend-two-psi.vercel.app",
    headers: {"Content-Type" : "application/json"},
    withCredentials: true
});


axiosHandler.interceptors.request.use(
    (config)=>{
        return (config)
    },
    (error)=>{
        return Promise.reject(error)
    }
)
axiosHandler.interceptors.response.use(
    (response)=>{
        return (response)
    },
    (error)=>{
        return Promise.reject(error)
    }
)