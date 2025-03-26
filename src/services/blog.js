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

export const getBlogById = async (id) => {
    try {
       const res = await axiosHandler.get(`/blog/${id}`);
       return res 
    } catch (error) {
        throw error
    }
}

export const addComment = async (comment, id, userId) => {
    try {
        const res = await axiosHandler.post(`/blog/addComment/${id}`, {comment, userId});
        return res
    } catch (error) {
        throw error
    }
}