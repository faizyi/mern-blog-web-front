import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { userProfileQuery } from "@/services/react-query/userQuery";

export const UserProfile = () => {
  const { data: userInfo } = userProfileQuery();

  const [profilePic, setProfilePic] = useState(userInfo?.data.userInfo?.profilePic || "");
  const [username, setUsername] = useState(userInfo?.data.userInfo?.username || "");
  const [email, setEmail] = useState(userInfo?.data.userInfo?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfilePic(URL.createObjectURL(file)); // Preview image
    }
  };

  const handleUpdateProfile = () => {
    console.log({
      username,
      email,
      profilePic,
      currentPassword,
      newPassword,
    });
    // TODO: Call API to update profile
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-6">
      <Card className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">User Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">

          {/* Profile Picture Upload */}
          <div className="flex flex-col items-center">
            <input
              id="profilePic"
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleProfilePicChange}
            />
            <label htmlFor="profilePic" className="cursor-pointer">
              <Avatar className="w-24 h-24 border border-gray-300">
                <AvatarImage src={profilePic} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </label>
            <Button variant="outline" size="sm" className="mt-2">
              Change Avatar
            </Button>
          </div>

          {/* User Info Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700">Username</label>
              <Input
                id="name"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-700">Email</label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
          </div>

          {/* Update Button */}
          <Button
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
