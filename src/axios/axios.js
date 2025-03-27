import axios from "axios";

export const axiosHandler = axios.create({
    // baseURL: "http://localhost:5001",
    baseURL: "https://mern-blog-web-back-production.up.railway.app",
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