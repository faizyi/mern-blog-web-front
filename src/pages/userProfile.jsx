import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UpdateUserProfileHook } from "@/customHooks/user/updateUserProfile";
import { Label } from "@/components/ui/label";
export const UserProfile = () => {
  const { profilePic, register, errors, handleSubmit, 
    onSubmit , loading , handleProfilePicChange, } = UpdateUserProfileHook();
  return (
    <div className="flex justify-center mt-8 items-center min-h-screen p-6">
    <Card className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-gray-800">User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* {message && (
          <Alert className={`p-3 rounded-lg border ${message.type === "error" ? "bg-red-100 text-red-700 border-red-300" : "bg-green-100 text-green-700 border-green-300"}`}>
            <AlertTitle className="font-bold">{message.type === "error" ? "Error" : "Success"}</AlertTitle>
            <AlertDescription>{message.text}</AlertDescription>
          </Alert>
        )} */}

        {/* Profile Picture Upload */}
        <div className="flex flex-col items-center">
          <input type="file" accept="image/*" id="profilePic" className="hidden"
           onChange={handleProfilePicChange} />
          <label htmlFor="profilePic" className="cursor-pointer">
            <Avatar className="w-24 h-24 border border-gray-300">
              <AvatarImage src={profilePic} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </label>
        </div>

        {/* User Info Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label>Your name</Label>
            <Input type="text" {...register("username", { required: true })} />
            {errors.username && <p className='text-red-500 text-sm'>Name is required</p>}
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" {...register("email", { required: true })} />
            {errors.email && <p className='text-red-500 text-sm'>Email is required</p>}
          </div>
          <div>
            <Label>Current Password</Label>
            <Input type="password" {...register("currentPassword")} />
          </div>
          <div>
            <Label>New Password</Label>
            <Input type="password" {...register("newPassword")} />
          </div>
          <Button type="submit" className="w-full bg-amber-500 text-white" disabled={loading}>
            {loading ? "Updating..." : "Update Profile"}
          </Button>
        </form>
      </CardContent>
    </Card>
  </div>
  );
};
