import React from 'react'
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { useSelector } from "react-redux";
import { AddComment } from './addComment';
export const BlogContent = ({ blog, user, isLoading}) => {
    const loader = useSelector((state) => state.loader.isLoader);
  return (
    <div className="container mx-auto py-10 px-4 mt-25">
    {loader || isLoading ? (
        <div className="flex flex-col space-y-4">
            <Skeleton className="h-96 w-full" />
            <Skeleton className="h-10 w-3/4" />
            <Skeleton className="h-6 w-1/2" />
            <Skeleton className="h-32 w-full" />
        </div>
    ) : (
        <div className="relative">
            <img
                src={blog?.image || "/default-blog.jpg"}
                alt={blog?.title}
                className="w-[500px] h-full rounded-xl shadow-md items-center"
            />
            <div className="mt-6">
                <Card className="bg-gray-50 shadow-lg p-6">
                    <CardContent>
                        <CardTitle className="text-3xl font-bold mb-4">{blog?.title}</CardTitle>
                        <p className="text-gray-700 text-lg mb-4">{blog?.description}</p>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-gray-600 text-sm">
                                Published on {new Date(blog?.createdAt).toLocaleDateString()} - {new Date(blog?.createdAt).toLocaleTimeString()}
                            </span>
                            <div><AddComment userId={blog?.user?._id}/></div>
                        </div>

                        <div className="flex items-center space-x-3 border-t pt-3">
                            <Avatar>
                                <AvatarImage src={user?.profilePic || "/default-avatar.jpg"} alt={user?.username} />
                                <AvatarFallback>{user?.username?.charAt(0) || "U"}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-medium">Written by {user?.username}</p>
                                <p className="text-xs text-gray-600">View: {blog?.views}</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )}
    </div>
  )
}
