import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCaption, TableCell, TableHead, 
TableHeader, TableRow } from '@/components/ui/table';
import { UserAllBlogsHook } from '@/customHooks/blog/UserAllBlogs';
export const UserAllBlogs = () => {
    const { isLoading, userBlog, handleDelete} = UserAllBlogsHook();
  return (
    <Table className={"container"}>
        <TableCaption>A list of your Blogs</TableCaption>
        <TableHeader>
            <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Image</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Read</TableHead>
                <TableHead className="text-right">Settings</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {isLoading ? 
                // Show skeleton loading when data is being fetched
                Array.from({length: userBlog.length || 6}).map((_, i)=>(
                    <TableRow key={i}>
                    <TableCell colSpan="7">
                        <Skeleton key={i} className="h-8 w-full" />
                    </TableCell>
                </TableRow>
                )
            ) : userBlog.length > 0 ? (
                // Show user's blogs if available
                userBlog.map((blog, index) => (
                    <TableRow key={blog._id}>
                        <TableCell className="font-medium">{index + 1}</TableCell>
                        <TableCell>
                            <img 
                                src={blog.image || "/default-blog.jpg"}
                                alt={blog.title} 
                                className="w-10 h-10 object-cover rounded-2xl"
                            />
                        </TableCell>
                        <TableCell>{blog.title.slice(0,10)}</TableCell>
                        <TableCell>{blog.category}</TableCell>
                        <TableCell>{blog.description.slice(0, 20)}...</TableCell>
                        <TableCell>
                            <a href={`/blog/${blog.title}/${blog._id}`} className="text-blue-500">View</a>
                        </TableCell>
                        <TableCell className="text-right">
                            <Button onClick={ () => handleDelete(blog._id)} className="bg-red-700
                             hover:bg-red-500 text-white px-2 py-1 rounded">Delete</Button>
                        </TableCell>
                    </TableRow>
                ))
            ) : (
                // Show message if no blogs found
                <TableRow>
                    <TableCell colSpan="7" className="text-center">
                        No blogs found.
                    </TableCell>
                </TableRow>
            )}
        </TableBody>
    </Table>
  );
};
