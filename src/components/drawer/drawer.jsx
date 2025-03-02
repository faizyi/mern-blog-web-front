import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { SignupHook } from '@/customHooks/user/signup';
import { Link } from 'react-router-dom';
import { BlogSerach } from '../blogSearch/blogSerach';
import { Button } from '../ui/button';
import { UserProfile } from '../userProfile/userProfile';

export const Drawer = () => {
  const user = localStorage.getItem("user");
  const { handleLogout } = SignupHook();

  return (
    <Sheet>
      {/* Drawer Trigger */}
      <SheetTrigger key={"open"}>
        Open
      </SheetTrigger>
      
      {/* Drawer Content */}
      <SheetContent side='right' className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>My Blog</SheetTitle>
        </SheetHeader>

        {/* Navigation Bar */}
        <div className="w-full bg-white shadow-md py-4 px-6 flex flex-col gap-4">
          
          {/* Blog Search Component */}
          <BlogSerach />
          
          {/* Navigation Buttons */}
          <div className="flex flex-col gap-2">
            <Link to="/">
              <Button variant="outline" className="px-4 py-2 w-full">
                Home
              </Button>
            </Link>
            
            {user ? (
              <div className="flex flex-col gap-2">
                {/* Create Blog Button */}
                <Link to="/user/create/blog">
                  <Button variant="outline" className="px-4 py-2 w-full">
                    Create Blog
                  </Button>
                </Link>
                
                {/* User Profile & Logout */}
                <UserProfile handleLogout={handleLogout} />
              </div>
            ) : (
              <Link to="/login">
                <Button
                  variant="outline"
                  className="bg-black text-white px-5 py-2 rounded-md hover:bg-black/80
                   transition duration-200 w-full"
                >
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
