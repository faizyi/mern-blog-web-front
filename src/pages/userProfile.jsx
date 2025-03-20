import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { UpdateUserProfileHook } from "@/customHooks/user/updateUserProfile";
export const UserProfile = () => {
  const [disable, setDisable] = useState(true);
  const { userInfo, profilePic, username, email, 
    currentPassword, newPassword, handleProfilePicChange, 
    handleUpdateProfile, setCurrentPassword, setEmail, setUsername, 
    setNewPassword, setProfilePic } = UpdateUserProfileHook();
    console.log(userInfo);
    

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-5xl bg-white shadow-lg rounded-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">User Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">

          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center">
            <input
              id="profilePic"
              name="profilePic"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={ (e) => {
                handleProfilePicChange(e)
                setDisable(false)
              }}
            />
            <label htmlFor="profilePic" className="cursor-pointer">
              {/* <img src={profilePic || `/userProfile/${userInfo?.profilePic}`} alt="" /> */}
              <Avatar className="w-24 h-24 border border-gray-300">
                <AvatarImage  src={profilePic}/>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </label>
            {/* <Button id variant="outline" size="sm" className="mt-2">
              Change Avatar
            </Button> */}
          </div>

          {/* User Info Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Username</label>
              <Input
                id="name"
                type="text"
                value={username || userInfo?.username}
                onChange={(e) => {
                  setUsername(e.target.value) 
                  setDisable(false)
                }}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input
                id="email"
                type="email"
                value={email || userInfo?.email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  setDisable(false)
                }}
              />
            </div>
          </div>

          {/* Password Change Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Current Password</label>
              <Input
                type="password"
                placeholder="Current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">New Password</label>
              <Input
                type="password"
                placeholder="New password"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value)
                  setDisable(false)
                }}
              />
            </div>
          </div>

          {/* Update Button */}
          <Button
          disabled={disable}
            className="w-full bg-black text-white py-2 rounded-md hover:bg-black/80 transition duration-200"
            onClick={handleUpdateProfile}
          >
            Save Changes
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
