import { LoadingSpinner } from '@/components/loader/Loader';
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { editBlogHook } from '@/customHooks/blog/editBlog';
import React from 'react'
import { CiEdit } from "react-icons/ci";
import { useSelector } from 'react-redux';
export const EditBlog = ({blogId}) => {
  const loader = useSelector((state) => state.loader.isLoader);
    const { handleEdit, showEdit, blogImg, 
    handleImageChange, handleSubmit, onSubmit, register, errors} = editBlogHook(blogId);
  return (
      <>
        <Dialog>
        <DialogTrigger asChild><Button className="bg-green-700
    hover:bg-green-500 text-[10px] text-white mr-4"><CiEdit /></Button></DialogTrigger>
    { loader ? <LoadingSpinner/> : 
        <DialogContent>
         
          <DialogHeader>
            <DialogTitle>Edit Your Blog</DialogTitle>
            <DialogDescription>
            </DialogDescription>
          </DialogHeader>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <input id="blogImage" type="file" accept="image/*" className="hidden"
                onChange={handleImageChange} 
                />
              <label htmlFor="blogImage" className="cursor-pointer">
                {blogImg ? (
                  <img src={blogImg} alt="Preview" className="w-full h-40 object-cover rounded-md border" />
                ) : (
                  <div className="w-full h-52 px-30 flex items-center justify-center border-2 border-dashed 
                  rounded-lg text-gray-500">
                    Click to Upload Image
                  </div>
                )}
              </label>
            </div>
              <div>
                <Label className="text-lg font-medium">Title</Label>
                <Input type="text" {...register("title", { required: true })} placeholder="Enter blog title" className="mt-2" />
                {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
              </div>
              <div className='h-[200px] overflow-scroll'>
                <Label className="text-lg font-medium">Description</Label>
                <Textarea
                  placeholder="Write your blog description..."
                  {...register("description", { required: true })}
                  rows={5}
                  className="mt-2"
                />
                {errors.description && <p className="text-red-500 text-sm">Description is required</p>}
              </div>
              <div className='flex justify-end gap-2'>
              <Button 
             type="submit"
              className="bg-green-300 text-black hover:bg-green-400 transition-all"
              >Save Changes</Button>
              </div>
            </form>

        </DialogContent>
        }
      </Dialog>
    </>
  )
}
