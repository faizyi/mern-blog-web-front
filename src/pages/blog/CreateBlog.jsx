import { LoadingSpinner } from "@/components/loader/Loader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CreateBlogHook } from "@/customHooks/blog/create";
import { AlertError } from "@/utils/AlertError";
import React from "react";
import { useSelector } from "react-redux";
import { BlogCategory } from "./blogCategory";

export const CreateBlog = () => {
  const loader = useSelector((state) => state.loader.isLoader);
  const { register, handleSubmit, errors, image, 
    handleImageChange, onSubmit, response, category, setCategory } = CreateBlogHook();

  return (
    <div className="flex justify-center items-center min-h-screen p-6 flex-col mt-9">
      {response && (
        <div className="mb-4 w-full max-w-md mt-16">
          <AlertError response={response} />
        </div>
      )}
      <Card className="w-full max-w-5xl bg-gray-50 rounded-2xl p-8">
        <CardHeader className="text-center mb-6">
          <CardTitle className="text-3xl font-semibold text-gray-800">Create a Blog</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section - Image Upload */}
            <div className="flex flex-col items-center space-y-4">
              <input id="blogImage" type="file" accept="image/*" className="hidden"
                onChange={handleImageChange} />
              <label htmlFor="blogImage" className="cursor-pointer">
                {image ? (
                  <img src={image} alt="Preview" className="w-full h-40 object-cover rounded-md border" />
                ) : (
                  <div className="w-full h-52 px-30 flex items-center justify-center border-2 border-dashed 
                  rounded-lg text-gray-500">
                    Click to Upload Image
                  </div>
                )}
              </label>
            </div>

            {/* right Section - Title & Description */}
            <div className="space-y-6">
              <div>
                <Label className="text-lg font-medium">Title</Label>
                <Input type="text" {...register("title", { required: true })} placeholder="Enter blog title" className="mt-2" />
                {errors.title && <p className="text-red-500 text-sm">Title is required</p>}
              </div>
              <div>
              <Label className="text-lg font-medium">Blog Category</Label>
              <BlogCategory setCategory={setCategory}/>
              </div>
              <div>
                <Label className="text-lg font-medium">Description</Label>
                <Textarea
                  placeholder="Write your blog description..."
                  {...register("description", { required: true })}
                  rows={5}
                  className="mt-2"
                />
                {errors.description && <p className="text-red-500 text-sm">Description is required</p>}
              </div>
            </div>

            {/* Publish Button */}
            <div className="col-span-1 md:col-span-2 flex justify-end">
              {loader ? (
                <LoadingSpinner />
              ) : (
                <Button type="submit" className="bg-amber-500 text-white py-2 px-6 rounded-lg hover:bg-amber-600 transition duration-200">
                  Publish Blog
                </Button>
              )}
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
