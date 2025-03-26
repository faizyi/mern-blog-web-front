import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FaRegComment } from "react-icons/fa";

export const BlogComments = ({ comments }) => {
  return (
    <div className="mt-10 max-w-4xl container mx-auto py-10 px-4">
      <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
        <FaRegComment className="text-gray-700" /> Comments
      </h2>

      {comments?.length === 0 ? (
        <p className="text-gray-500 text-center py-4">No comments yet. Be the first to comment!</p>
      ) : (
        <div className="space-y-4">
          {comments?.map((comment) => (
            <Card key={comment._id} className="shadow-lg border rounded-lg p-4 bg-white hover:shadow-xl transition-all">
              <CardContent className="flex gap-4 items-start">
                {/* User Avatar */}
                <Avatar className="w-12 h-12">
                  <AvatarImage src={comment.user?.profilePic || "/default-avatar.jpg"} alt={comment.user?.username} />
                  <AvatarFallback>{comment.user?.username?.charAt(0) || "U"}</AvatarFallback>
                </Avatar>

                {/* Comment Content */}
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-medium text-gray-900">{comment.user?.username}</p>
                    <span className="text-xs text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()} - {new Date(comment.createdAt).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-gray-700 mt-1">{comment.comment}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};
