import React from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useSelector } from "react-redux";
import { AddComment } from "./addComment";

export const BlogContent = ({ blog, user, isLoading }) => {
  const loader = useSelector((state) => state.loader.isLoader);

  return (
    <div className="container mx-auto py-10 px-4 mt-20">
      {loader || isLoading ? (
        <div className="flex flex-col space-y-4">
          <Skeleton className="h-10 w-3/4" /> {/* Title */}
          <Skeleton className="h-96 w-full" /> {/* Image */}
          <Skeleton className="h-6 w-1/2" /> {/* Date */}
          <Skeleton className="h-32 w-full" /> {/* Description */}
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          {/* Blog Title */}
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{blog?.title}</h1>

          {/* Blog Image */}
          <img
            src={blog?.image || "/default-blog.jpg"}
            alt={blog?.title}
            className="w-full h-[500px] object-cover rounded-lg shadow-md"
          />

          {/* Blog Details */}
          <Card className="bg-gray-50 shadow-lg p-6 mt-6">
            <CardContent>


              {/* Blog Description */}
              <p className="text-gray-700 text-lg mb-6">{blog?.description}</p>

               {/* Blog Meta */}
               <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                <span>
                  Published on {new Date(blog?.createdAt).toLocaleDateString()} - {new Date(blog?.createdAt).toLocaleTimeString()}
                </span>
                <div>
                  <AddComment userId={blog?.user?._id} />
                </div>
              </div>
              {/* Author Details */}
              <div className="flex items-center space-x-3 border-t pt-3">
                <Avatar>
                  <AvatarImage src={user?.profilePic || "/default-avatar.jpg"} alt={user?.username} />
                  <AvatarFallback>{user?.username?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Written by {user?.username}</p>
                  <p className="text-xs text-gray-600">Views: {blog?.views}</p>
                </div>
              </div>

            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
