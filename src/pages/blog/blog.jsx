import React from "react";
import { useParams } from "react-router-dom";
import { BlogByIdQuery } from "@/services/react-query/blog/blogByIdQuery";
import { BlogComments } from "./comments";
import { BlogContent } from "./blogContent";
export const GetBlogById = () => {
    const { id } = useParams();
    const { data: blogById, isLoading } = BlogByIdQuery(id);
    const blog = blogById?.data?.blog;
    const user = blogById?.data?.blog?.user;
    const comments = blogById?.data?.comments;
    return (
        <div>
            <BlogContent blog={blog} user={user} isLoading={isLoading} />
            <BlogComments comments={comments} />
        </div>
    );
};

export default GetBlogById;
