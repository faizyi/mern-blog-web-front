import React from 'react'
import { UserAllBlogs } from './UserAllBlogs'
import { AlertError } from '@/utils/AlertError';
import { UserAllBlogsHook } from '@/customHooks/blog/UserAllBlogs';

export const ManageBlogs = () => {
    const { response} = UserAllBlogsHook();
    return (
        <div className='min-h-screen mt-29 max-auto'>
            {response && ( <div className=""><AlertError response={response} /></div>)}
            <h3 className="text-2xl font-semibold container">Manage Your Blogs</h3>
            <UserAllBlogs />
        </div>
    )
}
