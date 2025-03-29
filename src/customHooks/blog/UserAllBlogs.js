import { delBlog } from '@/services/blog';
import { blogQuery } from '@/services/react-query/blog/blogQuery';
import { userProfileQuery } from '@/services/react-query/userQuery';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { showLoader, hideLoader } from '@/redux/loader/LoaderSlice';
export const UserAllBlogsHook = () => {
  const dispatch = useDispatch();
    const [userBlog, setUserBlog] = useState([]);
    const [response, setResponse] = useState(null);
    // Fetch user profile
    const { data: userInfo } = userProfileQuery();
    const user = userInfo?.data?.userInfo?._id;
    // Fetch all blogs
    const { data: allBlogs, isLoading, refetch } = blogQuery();
    // console.log(allBlogs?.data);
    
    const blogs = allBlogs?.data?.blogs || [];
    // const comments = allBlogs?.data?.comments || [];
    // console.log(comments);
    // console.log(blogs);
    
    // console.log(blogs);
    
    // const comments = allBlogs?.data?.comments || [];
    // Filter blogs belonging to the current user
    useEffect(() => {
        if (user && blogs?.length > 0) {
            const userFilteredBlogs = blogs?.filter((blog) => blog?.user?._id === user);
            // const userFilteredComments = comments?.filter((comment) => comment?.user._id !== user);
            setUserBlog(userFilteredBlogs);
        } 
    }, [blogs,user]); // Run only when `blogs` or `user` changes


    // delete user Blog
    const handleDelete = async (id) =>{
      dispatch(showLoader())
      try {
        const res = await delBlog(id);
        setResponse(res)
        setUserBlog((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id))
        await refetch()
        dispatch(hideLoader())
      } catch (error) {
        setResponse(error)
        dispatch(hideLoader())
        console.log(error);
      }
      
      
      //
    }
  return {
    userBlog,
    isLoading,
    handleDelete,
    response
  }
}
