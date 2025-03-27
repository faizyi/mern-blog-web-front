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
        const res = await axiosHandler.get("/user/logout", {
            withCredentials: true
        });
        return res
    } catch (error) {
        return error
    }
}

export const deleteUser = async () => {
    try {
        const res = await axiosHandler.post("/user/delete-user");
        return res
    } catch (error) {
        return error
    }
}

export const getUserProfile = async () =>{
    try {
        const res = await axiosHandler.get("/user/profile")
        console.log(res);
        
        return res
    } catch (error) {
        localStorage.removeItem("user");
        throw error
    }
}

export const updateUserProfile = async (formData) =>{
    
    try {
        const res = await axiosHandler.put("/user/update-profile", formData, {
            headers: {"Content-Type" : "multipart/form-data"}
        });
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
        
        return res
    } catch (error) {
        
        return error
    }
}