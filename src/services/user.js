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

export const getUserProfile = async (navigate) =>{
    try {
        const res = await axiosHandler.get("/user/profile",{
            withCredentials: true
        })
        
        return res
    } catch (error) {
        localStorage.removeItem("user");
        return error
    }
}

export const updateUserProfile = async (formData) =>{
    // console.log(formData);
    
    try {
        const res = await axiosHandler.put("/user/update-profile", formData, {
            headers: {"Content-Type" : "multipart/form-data"}
        });
        console.log(res);
        return res
    } catch (error) {
        return error
    }
}

export const forgotPassword = async (email) => {
    try {
        const res = await axiosHandler.post("/user/forgot-password",{ email});
        return res
    } catch (error) {
        return error
    }
}

export const resetPassword = async (password, token) => {
    try {
        const res = await axiosHandler.post(`/user/reset-password/${token}`, {password});
        console.log(res);
        
        return res
    } catch (error) {
        console.log(error);
        
        return error
    }
}