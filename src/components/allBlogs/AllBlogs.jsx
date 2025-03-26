import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { formatDistanceToNow } from "date-fns";
import { blogQuery } from "@/services/react-query/blog/blogQuery";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Skeleton } from "../ui/skeleton";
import { Button } from "../ui/button";
import { BlogCategories } from "./blogCategories";

export const AllBlogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const { data: allBlogs, isLoading } = blogQuery();
  const filteredBlogs = selectedCategory === "All" ?
  allBlogs?.data?.blogs : allBlogs?.data?.blogs.filter((blog) => blog.category === selectedCategory)
  return (
    <div className="container mx-auto py-10 px-4">
      <h3 className="text-2xl font-semibold mb-6">Latest Posts</h3>
      <div className="flex justify-center">
      <BlogCategories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {isLoading
          ? [1, 2, 3, 4, 5, 6].map((_, i) => <Skeleton key={i} className="h-60 w-full" />)
          : filteredBlogs?.map((post) => (
            <Card key={post._id} className="bg-gray-50">

              <div className="relative px-2">
                <img
                  src={post.image || "/default-blog.jpg"}
                  alt={post.title}
                  className="w-full object-cover rounded-2xl"
                />
              </div>

              <CardContent className="">

                <Link to={`/blog/${encodeURIComponent(post.title)}/${post._id}`}>
                  <CardTitle className="text-lg font-bold">{post.title.length > 30 ?
                    post.title.substring(0, 40) + "..." : post.title} 
                    <p className="text-[10px] px-16 py-1 border border-[#D2D2D1] bg-[#EFEFEE] text-[#1A1A19] 
                    rounded-full">
                  {post.category}
                </p>
                  </CardTitle>
                  <p className="text-sm text-gray-600">
                    {post.description.length > 100 ? post.description.substring(0, 100)
                      + "..." : post.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <Button variant="link" className="">
                      Read More
                    </Button>
                    <span className=" text-gray-600 px-2 py-1 text-xs rounded">
                      {new Date(post.createdAt).toLocaleTimeString()}-
                      {new Date(post.createdAt).toDateString()}
                    </span>
                  </div>
                </Link>

                <div className="flex items-center space-x-3 border-t pt-3">
                  <Avatar>
                    <AvatarImage src={post.user?.profilePic || "/default-avatar.jpg"}
                      alt={post.user?.username} />
                    <AvatarFallback>{post.user?.username?.charAt(0) || "U"}</AvatarFallback>
                  </Avatar>
                  <div className="flex justify-between gap-10">
                    <div >
                    <p className="text-sm font-medium">{post.user?.username}</p>
                    <p className="text-xs text-gray-600">Views {post.views}</p>
                    </div>
                  </div>
                </div>

              </CardContent>
            </Card>
          ))}
      </div>
    </div>
  );
};
