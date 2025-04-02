import { createBlog, generateBlogDescription } from '@/services/blog';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
import { blogQuery } from '@/services/react-query/blog/blogQuery';

export const CreateBlogHook = () => {
    const dispatch = useDispatch();
    const { refetch } = blogQuery();
    const [response, setResponse] = useState(null);
    const [category, setCategory] = useState("");
    const [isGenerating, setIsGenerating] = useState(false); // Loading state for AI generation
    const { register, handleSubmit, getValues, setValue, formState: { errors }, reset, setError } = useForm({
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
        if (!category) return;
        dispatch(showLoader());

        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("category", category);
        if (file) formData.append("blogImage", file);

        try {
            const res = await createBlog(formData);
            console.log(res);
            
            setResponse(res);
            await refetch();
            reset
            dispatch(hideLoader());
        } catch (error) {
            if (error.status === 401) localStorage.removeItem("user");
            dispatch(hideLoader());
            setResponse(error);
        }
    };

    const handleGenerate = async () => {
        const value = getValues();
        
        // If title is empty, show error
        if (value.title === "") {
            setError("title", { type: "text", message: "Title is required" });
            return;
        }

        setIsGenerating(true); // Start loading
        try {
            const res = await generateBlogDescription(value.title);
            if (res?.data) {
                console.log(res);
                
                setValue("description", res.data.description); // Set generated text in textarea
            }
        } catch (error) {
            console.error("Error generating blog:", error);
        }
        setIsGenerating(false); // Stop loading
    };

    return {
        register,
        handleSubmit,
        errors,
        reset,
        image,
        setImage,
        handleImageChange,
        onSubmit,
        response,
        category,
        setCategory,
        handleGenerate,
        isGenerating
    };
};
