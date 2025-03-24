import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UpdateUserProfileHook } from "@/customHooks/user/updateUserProfile";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { AlertError } from "@/utils/AlertError";
import { useSelector } from "react-redux";
import { LoadingSpinner } from "@/components/loader/Loader";
import { DeleteUser } from "@/components/userProfile/DeleteUser";

export const UserProfile = () => {
  const loader = useSelector((state) => state.loader.isLoader);
  const {
    profilePic,
    register,
    errors,
    handleSubmit,
    onSubmit,
    handleProfilePicChange,
    response,
    handleDeleteAccount,
  } = UpdateUserProfileHook();

  return (
    <div className="flex justify-center items-center min-h-screen p-6 mt-19 flex-col">
      {response && (
        <div className="mb-4 w-full max-w-md">
          <AlertError response={response} />
        </div>
      )}

      <Card className="w-full max-w-4xl bg-gray-50 rounded-2xl p-8">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-900">
            User Profile
          </CardTitle>
          <p className="text-gray-500 text-sm mt-2">
            Manage your account settings
          </p>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center space-y-3">
            <input
              type="file"
              accept="image/*"
              id="profilePic"
              className="hidden"
              onChange={handleProfilePicChange}
            />
            <label htmlFor="profilePic" className="cursor-pointer group">
              <Avatar className="w-24 h-24 border-4 border-gray-300 transition-transform transform group-hover:scale-105">
                <AvatarImage src={profilePic} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              {/* <p className="text-sm text-blue-500 mt-2 group-hover:underline">
                Change Profile Picture
              </p> */}
            </label>
          </div>

          {/* User Info Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* First Row: Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Your Name</Label>
                <Input
                  type="text"
                  {...register("username", { required: true })}
                  className="border-gray-300 focus:ring-blue-500"
                />
                {errors.username && (
                  <p className="text-red-500 text-sm">Name is required</p>
                )}
              </div>
              <div>
                <Label>Email</Label>
                <Input
                  type="email"
                  {...register("email", { required: true })}
                  className="border-gray-300 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">Email is required</p>
                )}
              </div>
            </div>

            {/* Second Row: Passwords */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label>Current Password</Label>
                <Input
                  type="password"
                  {...register("currentPassword")}
                  className="border-gray-300 focus:ring-blue-500"
                />
              </div>
              <div>
                <Label>New Password</Label>
                <Input
                  type="password"
                  {...register("newPassword")}
                  className="border-gray-300 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-sm text-blue-500 hover:text-blue-700"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Update Profile Button */}
            {loader ? (
              <LoadingSpinner />
            ) : (
              <Button
                type="submit"
                className="w-full bg-amber-300 text-black hover:bg-amber-400 transition-all"
              >
                Update Profile
              </Button>
            )}
          </form>
        </CardContent>

        {/* Delete Account Section */}
        <div className="border-t pt-6">
          <DeleteUser handleDeleteAccount={handleDeleteAccount} />
        </div>
      </Card>
    </div>
  );
};
