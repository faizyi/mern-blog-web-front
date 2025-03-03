import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { SignupHook } from '@/customHooks/user/signup';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { HiHome, HiUser} from 'react-icons/hi';
import { IoCreateOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";

export const Drawer = () => {
    const navigate = useNavigate();
  const user = localStorage.getItem("user");
  const { handleLogout } = SignupHook();

  return (
    <Sheet>
      {/* Drawer Trigger */}
      <SheetTrigger key={"open"}>
        <RiMenu3Line size={25} />
      </SheetTrigger>
      
      {/* Drawer Content */}
      <SheetContent side='right' className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle onClick={() => navigate("/")}>My Blog</SheetTitle>
          <div className='border-b'></div>
          <SheetDescription>
                    {/* Navigation Bar */}

          </SheetDescription>
        </SheetHeader>
        <div className="w-full py-4 px-6 flex justify-center">
        
        {/* Navigation Buttons */}
        <div className="flex flex-col gap-2">
        <Link to="/" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition">
          <HiHome size={20} /> 
          <span>Home</span>
        </Link>
          
          {user ? (
            <div className="flex flex-col gap-2">
              {/* Create Blog Button */}
              <Link to="/user/create/blog" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                <IoCreateOutline size={20} /> 
                <span>Create Blog</span>
              </Link>
              
              {/* User Profile & Logout */}
              <Link to="/user/profile" className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                <HiUser size={20} />
                <span>Profile</span>
              </Link>
                <Button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition" variant="outline" onClick={handleLogout}>Logout</Button>
            </div>
          ) : (
            <Link to="/login">
              <Button
                variant="outline"
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition"
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
