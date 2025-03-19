import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";


export const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    console.log({ title, description, image });
    // TODO: API call to upload blog post
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">Create a Blog</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">

          {/* Image Upload Section */}
          <div className="flex flex-col items-center">
            <input id="blogImage" type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
            <label htmlFor="blogImage" className="cursor-pointer">
              {preview ? (
                <img src={preview} alt="Preview" className="w-full h-40 object-cover  rounded-md border" />
              ) : (
                <div className="w-full h-40 flex items-center p-4 justify-center border rounded-md text-gray-500">
                  Click to Upload Image
                </div>
              )}
            </label>
          </div>

          {/* Title Input */}
          <div>
            <label className="text-sm font-medium text-gray-700">Title</label>
            <Input 
              type="text" 
              placeholder="Enter blog title" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          {/* Description Input */}
          <div>
            <label className="text-sm font-medium text-gray-700">Description</label>
            <Textarea
              placeholder="Write your blog description..." 
              value={description} 
              onChange={(e) => setDescription(e.target.value)}
              rows={5}
            />
          </div>

          {/* Upload Button */}
          <Button 
            className="w-full bg-black text-white py-2 rounded-md hover:bg-black/80 transition duration-200"
            onClick={handleSubmit}
          >
            Publish Blog
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
