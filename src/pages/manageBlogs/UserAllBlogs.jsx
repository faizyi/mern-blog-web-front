import { LoadingSpinner } from '@/components/loader/Loader';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
    Table, TableBody, TableCaption, TableCell, TableHead,
    TableHeader, TableRow
} from '@/components/ui/table';
import { UserAllBlogsHook } from '@/customHooks/blog/UserAllBlogs';
import { useSelector } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";
import { EditBlog } from './EditBlog';

export const UserAllBlogs = () => {
    const loader = useSelector((state) => state.loader.isLoader);
    const { isLoading, userBlog, handleDelete } = UserAllBlogsHook();

    return (
        <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg max-h-[600px] overflow-y-auto">
            {loader ? (
                <LoadingSpinner />
            ) : (
                <Table className="w-full border border-gray-200 rounded-lg overflow-hidden">
                    <TableCaption className="text-lg font-semibold text-gray-700">Your Blogs</TableCaption>
                    <TableHeader className="bg-gray-100">
                        <TableRow>
                            <TableHead className="font-bold text-gray-700">No.</TableHead>
                            <TableHead className="font-bold text-gray-700">Image</TableHead>
                            <TableHead className="font-bold text-gray-700">Title</TableHead>
                            <TableHead className="font-bold text-gray-700">Category</TableHead>
                            <TableHead className="font-bold text-gray-700">Description</TableHead>
                            <TableHead className="font-bold text-gray-700">Views</TableHead>
                            <TableHead className="font-bold text-gray-700">Read</TableHead>
                            <TableHead className="text-right font-bold text-gray-700">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (
                            Array.from({ length: userBlog.length || 6 }).map((_, i) => (
                                <TableRow key={i}>
                                    <TableCell colSpan="8">
                                        <Skeleton className="h-10 w-full rounded-md" />
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : userBlog.length > 0 ? (
                            userBlog.map((blog, index) => (
                                <TableRow key={blog._id} className="hover:bg-gray-50 transition">
                                    <TableCell className="font-medium text-gray-900">{index + 1}</TableCell>
                                    <TableCell>
                                        <img
                                            src={blog.image || "/default-blog.jpg"}
                                            alt={blog.title}
                                            className="w-12 h-12 object-cover rounded-lg shadow-md"
                                        />
                                    </TableCell>
                                    <TableCell className="font-semibold text-gray-800">{blog.title.slice(0, 10)}...</TableCell>
                                    <TableCell className="text-gray-700">{blog.category}</TableCell>
                                    <TableCell className="text-gray-600">{blog.description.slice(0, 30)}...</TableCell>
                                    <TableCell className="text-gray-800 font-medium">{blog.views}</TableCell>
                                    <TableCell>
                                        <a href={`/blog/${blog.title}/${blog._id}`} className="text-blue-600
                                         hover:underline">View</a>
                                    </TableCell>
                                    <TableCell className="text-right flex gap-3 justify-end">
                                        <EditBlog blogId={blog} />
                                        <Button
                                            onClick={() => handleDelete(blog._id)}
                                            className="bg-red-600 hover:bg-red-500 text-white px-3 py-2
                                             rounded-lg shadow-md transition"
                                        >
                                            <MdDeleteOutline size={18} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan="8" className="text-center text-gray-600 py-4">
                                    No blogs found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            )}
        </div>
    );
};
