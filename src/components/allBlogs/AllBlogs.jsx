import React from "react";
// import { formatDistanceToNow } from "date-fns"; // To format the created time
import { Link } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Button } from "../ui/button";

export const AllBlogs = ({ posts, loading }) => {
  return (
    <div className="container mx-auto py-10 px-4">
    <h3 className="text-2xl font-semibold mb-6">Latest Posts</h3>

    <div className="grid md:grid-cols-3 gap-6">
      {
      // loading ? (
        [1, 2, 3,4,5,6].map((_, i) => <Skeleton key={i} className="h-60 w-full" />
      // {/* ) : ( */}
        // posts.map((post) => (
        //   <Card key={post._id} className="hover:shadow-lg transition">
        //     <div className="relative">
        //       {/* Blog Image */}
        //       <img
        //         src={post.image || "/default-blog.jpg"} // Default image if none
        //         alt={post.title}
        //         className="w-full h-40 object-cover rounded-t-md"
        //       />
        //       {/* Blog Created Time */}
        //       <span className="absolute top-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
        //         {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
        //       </span>
        //     </div>

        //     <CardContent className="p-4">
        //       {/* Blog Title */}
        //       <CardTitle className="text-lg font-bold">{post.title}</CardTitle>

        //       {/* Blog Description */}
        //       <p className="text-sm text-gray-600 mt-2">
        //         {post.content.length > 100 ? post.content.substring(0, 100) + "..." : post.content}
        //       </p>

        //       {/* Read More Button */}
        //       <Link to={`/blog/${post._id}`}>
        //         <Button variant="link" className="mt-4">
        //           Read More
        //         </Button>
        //       </Link>
        //     </CardContent>
        //   </Card>
        // ))
      )}
    </div>
  </div>
  );
};
