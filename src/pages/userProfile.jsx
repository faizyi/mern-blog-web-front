import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UpdateUserProfileHook } from "@/customHooks/user/updateUserProfile";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom"; // Add Link component for navigation
import { AlertError } from "@/utils/AlertError";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "@/components/loader/Loader";
export const UserProfile = () => {
  const loader = useSelector((state) => state.loader.isLoader);
  const { profilePic, register, errors, handleSubmit,
    onSubmit, handleProfilePicChange, response } = UpdateUserProfileHook();
  return (
    <div className="flex justify-center mt-8 items-center min-h-screen p-6 flex-col">
      {response && <div className="mb-4 w-full max-w-md"><AlertError response={response} /></div>}
      <Card className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">User Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center">
            <input type="file" accept="image/*" id="profilePic" className="hidden" onChange={handleProfilePicChange} />
            <label htmlFor="profilePic" className="cursor-pointer">
              <Avatar className="w-24 h-24 border border-gray-300">
                <AvatarImage src={profilePic} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </label>
          </div>

          {/* User Info Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 ">
            {/* First Row: Name and Email */}
            <div className="block space-x-0 sm:flex sm:space-x-4">
              <div className="w-full">
                <Label>Your name</Label>
                <Input type="text" {...register("username", { required: true })} />
                {errors.username && <p className="text-red-500 text-sm">Name is required</p>}
              </div>
              <div className="w-full mt-3 sm:mt-0">
                <Label>Email</Label>
                <Input type="email" {...register("email", { required: true })} />
                {errors.email && <p className="text-red-500 text-sm">Email is required</p>}
              </div>
            </div>

            {/* Second Row: Current Password and New Password */}
            <div className="block space-x-0 sm:flex sm:space-x-4">
              <div className="w-full mt-3 sm:mt-0">
                <Label>Current Password</Label>
                <Input type="password" {...register("currentPassword")} />
              </div>
              <div className="w-full mt-3 sm:mt-0">
                <Label>New Password</Label>
                <Input type="password" {...register("newPassword")} />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link to="/forgot-password" className="text-sm text-blue-500 hover:text-blue-700">
                Forgot Password?
              </Link>
            </div>

            {loader ? <LoadingSpinner/> : 
            <Button type="submit" className="w-full  bg-amber-300 text-black hover:bg-amber-400" >
              Update Profile
            </Button>
            }
          </form>

          {/* Manage All Blogs Button */}
          {/* <div className="mt-6 text-center">
            <Link to="/manage-blogs">
              <Button className="w-full bg-blue-500 text-white">
                Manage All Blogs
              </Button>
            </Link>
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};
