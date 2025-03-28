import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { blogQuery } from '@/services/react-query/blog/blogQuery';

export const BlogSerach = () => {
  const { data: allBlogs, isLoading } = blogQuery();
  const blogs = allBlogs?.data?.blogs || [];
  const blogsCategories = [...new Set(blogs.map((item) => item.category))]; // Remove duplicates

  const [categoryIndex, setCategoryIndex] = useState(0);

  useEffect(() => {
    if (blogsCategories.length === 0) return; // Prevent running if no categories

    const interval = setInterval(() => {
      setCategoryIndex((prevIndex) => (prevIndex + 1) % blogsCategories.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [blogsCategories]);

  return (
    <div className="relative w-full max-w-lg">
      <Input
        type="text"
        placeholder={`Search blog Category: ${blogsCategories[categoryIndex] || ''}`}
        className="w-[150px] sm:w-[400px] border-3 border-t-3 border-l-3 
        border-r-3 md:w-[400px] lg:w-[500px] 
        text-white placeholder-gray-400"
      />
    </div>
  );
}
