import { axiosHandler } from "@/axios/axios"

export const createBlog = async (blogData) => {
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
       const res = await axiosHandler.get("/blog/all-blogs", {
        withCredentials: false
       });
       return res 
    } catch (error) {
        throw error
    }
}

export const getBlogById = async (id, userId) => {
    try {
       const res = await axiosHandler.post(`/blog/${id}`, {userId});
       return res 
    } catch (error) {
        throw error
    }
}

export const addComment = async (comment, id, loginUserId, blogUserId) => {
    try {
        const res = await axiosHandler.post(`/blog/addComment/${id}`, {comment, loginUserId, blogUserId});
        return res
    } catch (error) {
        throw error
    }
}


export const delBlog = async (id) => {
    console.log(id);
    
    try {
        const res = await axiosHandler.delete(`/blog/del-blog/${id}`);
        return res
    } catch (error) {
        throw error
    }
}

export const editBlog = async (data, file, id) => {
    const formData = new FormData();
    formData.append("data", JSON.stringify(data));
    formData.append("blogImage", file);
    try {
        const res = await axiosHandler.put(`/blog/edit-blog/${id}`, formData, {
            headers: {"Content-Type": "multipart/formdata"}
        });
        return res
    } catch (error) {
        throw error
    }
}