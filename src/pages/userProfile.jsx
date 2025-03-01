import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { UserProfileHook } from '@/customHooks/user/userProfile'
import React, { useEffect } from 'react'

export const UserProfile = () => {
  const { user } = UserProfileHook();
  console.log(user);
  return (
    <div className="flex justify-center items-center mt-14 bg-gray-100 p-6">
      <Card className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-gray-800">User Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          
          {/* Avatar Section */}
          <div className="flex flex-col items-center">
            <Avatar className="w-20 h-20 border border-gray-300">
              <AvatarImage src={user?.profilePic} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="outline" size="sm" className="mt-2">
              Change Avatar
            </Button>
          </div>

          {/* Name Input */}
          <div>
            <Input
              // id="name"
              type="text"
              value={user?.username}
              // onChange={(e) => setName(e.target.value)}
              className="mt-2"
            />
          </div>

          {/* Email Input */}
          <div>
            <Input 
              id="email"
              type="email"
              value={user?.email}
              // onChange={(e) => setEmail(e.target.value)}
              className="mt-2"
            />
          </div>

          {/* Password Change Section */}
          <div>
            <Input 
              // id="password"
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Current password"
              className="mt-2"
            />
          </div>
          <div>
            <Input 
              // id="password"
              type="password"
              // value={password}
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Current password"
              className="mt-2"
            />
          </div>
          {/* Update Button */}
          <Button 
            className="w-full bg-black text-white py-2 rounded-md hover:bg-black/80 transition duration-200"
            // onClick={handleUpdate}
          >
            Update Profile
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
