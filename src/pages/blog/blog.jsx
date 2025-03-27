import React from "react";
import { useParams } from "react-router-dom";
import { BlogByIdQuery } from "@/services/react-query/blog/blogByIdQuery";
import { BlogComments } from "./comments";
import { BlogContent } from "./blogContent";
import { IoMdArrowRoundBack } from "react-icons/io";
import { userProfileQuery } from "@/services/react-query/userQuery";
export const GetBlogById = () => {
    const { id } = useParams();
    const { data: userInfo, } = userProfileQuery();
    const userId = userInfo?.data.userInfo._id
    const { data: blogById, isLoading } = BlogByIdQuery(id, userId);
    const blog = blogById?.data?.blog;
    const user = blogById?.data?.blog?.user;
    const comments = blogById?.data?.comments;
    return (
        <div>
            {/* <div className="absolute top-33 bottom-0 left-30"><IoMdArrowRoundBack/></div> */}
            <BlogContent blog={blog} user={user} isLoading={isLoading} />
            <BlogComments comments={comments} />
        </div>
    );
};

export default GetBlogById;
