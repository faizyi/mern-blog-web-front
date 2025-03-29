import { editBlog } from '@/services/blog';
import { blogQuery } from '@/services/react-query/blog/blogQuery';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
export const editBlogHook = (blogId) => {
    // console.log(blogId);
    
    const dispatch = useDispatch();
    const { data: allBlogs, isLoading, refetch } = blogQuery();
    const [showEdit, setShowEdit] = useState(false);
    const [blogImg, setBlogImg] = useState(blogId.image || "")
    const [file, setFile] = useState(null);
      const { register, handleSubmit, getValues, formState: { errors } , reset} = useForm({
        defaultValues: {
          title: blogId.title || "", 
          description: blogId.description || "",
        }
      });

      useEffect(() => {
        reset({
            title: blogId.title || "",
            description: blogId.description || "",
        });
        setBlogImg(blogId.image || ""); // Reset image preview
    }, [blogId, reset]);

      const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setFile(file);
          setBlogImg(URL.createObjectURL(file)); // Preview image
        }
      };

      const onSubmit = async (data) => {
        dispatch(showLoader());
        const formData = { ...data}
        if(!blogImg) return
        try {
            const res = await editBlog(formData, file, blogId._id);
            setBlogImg(res.data.blog.image)
            await refetch()
            dispatch(hideLoader())
            
        } catch (error) {
            console.log(error);
            dispatch(hideLoader())
        }
      }
  return {
    showEdit,
    blogImg,
    register,
    handleSubmit,
    onSubmit,
    errors,
    handleImageChange
  }
}
