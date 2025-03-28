import { delBlog } from '@/services/blog';
import { blogQuery } from '@/services/react-query/blog/blogQuery';
import { userProfileQuery } from '@/services/react-query/userQuery';
import React, { useEffect, useState } from 'react'

export const UserAllBlogsHook = () => {
    const [userBlog, setUserBlog] = useState([]);
    // Fetch user profile
    const { data: userInfo } = userProfileQuery();
    const user = userInfo?.data?.userInfo?._id;
    // Fetch all blogs
    const { data: allBlogs, isLoading } = blogQuery();
    const blogs = allBlogs?.data?.blogs || [];
    // Filter blogs belonging to the current user
    useEffect(() => {
        if (user && blogs.length > 0) {
            const userFilteredBlogs = blogs.filter((blog) => blog?.user?._id === user);
            setUserBlog(userFilteredBlogs);
        }
    }, [blogs, user]); // Run only when `blogs` or `user` changes


    const handleDelete = async (id) =>{
      try {
        const res = await delBlog(id);
        console.log(res);
        
      } catch (error) {
        console.log(error);
        
      }      
    }
  return {
    userBlog,
    isLoading,
    handleDelete
  }
}
