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
import { FaMagic } from "react-icons/fa";  

export const CreateBlog = () => {
  const loader = useSelector((state) => state.loader.isLoader);
  const { register, handleSubmit, errors, image, handleImageChange, 
    onSubmit, response, category, setCategory, handleGenerate, isGenerating } = CreateBlogHook();

  return (
    <div className="flex justify-center items-center min-h-screen p-6 flex-col mt-19">
      {response && (
        <div className="mb-4 w-full max-w-md mt-1">
          <AlertError response={response} />
        </div>
      )}
      <Card className="w-full max-w-5xl bg-gray-50 rounded-2xl p-8 shadow-lg">
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

            {/* Right Section - Title & Description */}
            <div className="space-y-6">
              <div>
                <Label className="text-lg font-medium">Title</Label>
                <Input 
                  type="text" 
                  {...register("title", { required: true })} 
                  placeholder="Enter blog title" 
                  className="mt-2" 
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              </div>
              <div>
                <Label className="text-lg font-medium">Blog Category</Label>
                <BlogCategory setCategory={setCategory}/>
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <Label className="text-lg font-medium">Description</Label>
                  <Button 
                    onClick={handleGenerate} 
                    disabled={isGenerating}
                    className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center 
                     gap-2 hover:bg-purple-700 transition"
                  >
                    {isGenerating ?   <LoadingSpinner size="sm" /> : <FaMagic /> } AI Generate
                  </Button>
                </div>
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
                <Button type="submit" 
                className="bg-amber-500 text-white py-2 px-6 rounded-lg hover:bg-amber-600 
                transition duration-200">
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
