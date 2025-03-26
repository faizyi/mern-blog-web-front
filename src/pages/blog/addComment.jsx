import React from "react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { AddCommentHook } from "@/customHooks/blog/addComment";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaRegComment } from "react-icons/fa6";
import { LoadingSpinner } from "@/components/loader/Loader";
import { AlertError } from "@/utils/AlertError";
export const AddComment = ({ userId}) => {
  const { comment, setComment, showCommentBox,
     setShowCommentBox, handleClick, handleAddComment, isLoader, response, setResponse } = AddCommentHook({userId});

  return (
    <div className="relative">
      
      <Popover open={showCommentBox} onOpenChange={setShowCommentBox}>
        <PopoverTrigger asChild>
          <Button
            onClick={handleClick}
            className="flex items-center text-black gap-2 bg-amber-300 hover:bg-amber-400"
          >
            <FaRegComment /> Add Comment
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-96 p-4 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Add a Comment</h3>
        {response && ( <div className="mb-4 w-full"><AlertError response={response} /></div>)} 
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write your comment..."
            className="w-full p-2 border rounded-md"
          />
          <div className="flex justify-end gap-2 mt-3">
            <Button variant="outline" onClick={() => {setShowCommentBox(false), setResponse('')}} className="text-gray-600">
              Cancel
            </Button>
            {/* { isLoader ? <LoadingSpinner/> :  */}
            <Button
              variant="default"
            //   type="submit"
              className="bg-amber-500 text-white hover:bg-amber-600"
              onClick={handleAddComment}
            >
              Add Comment
            </Button>
             {/* } */}
           
          </div>
        </PopoverContent>

      </Popover>
      
    </div>
  );
};
