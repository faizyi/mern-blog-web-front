import { axiosHandler } from "@/axios/axios"

export const createBlog = async (blogData) => {
    console.log(blogData);
    try {
       const res = await axiosHandler.post("/blog/create", blogData, {
        headers: {"Content-Type" : "multipart/form-data"}
       });
       return res 
    } catch (error) {
        throw error
    }
}

export const getAllBlog = async () => {
    try {
       const res = await axiosHandler.get("/blog/all-blogs");
       return res 
    } catch (error) {
        throw error
    }
}