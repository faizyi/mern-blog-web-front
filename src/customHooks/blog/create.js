import { createBlog } from '@/services/blog';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
import { blogQuery } from '@/services/react-query/blog/blogQuery';
export const CreateBlogHook = () => {
    const dispatch = useDispatch();
    const { refetch } = blogQuery();
    const [response, setResponse] = useState(null);
    const [category, setCategory] = useState("");
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            title: "",
            description: ""
        }
    });
    const [image, setImage] = useState("");
    const [file, setFile] = useState(null);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFile(file);
            setImage(URL.createObjectURL(file));
        }
    };

    const onSubmit = async (data) => {
        dispatch(showLoader());
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("category", category)
        if(!category) return
        if(file) formData.append("blogImage", file);
        try {
            const res = await createBlog(formData);
            await refetch();
            setResponse(res);
            dispatch(hideLoader());
            // reset();
        } catch (error) {
            if(error.status == 401) localStorage.removeItem("user");
            dispatch(hideLoader());
            setResponse(error);
        }
    };
    return {
        register,
        handleSubmit,
        errors,
        reset,
        image,
        setImage,
        handleImageChange,
        handleSubmit,
        onSubmit,
        response,
        category,
        setCategory
    }
}
