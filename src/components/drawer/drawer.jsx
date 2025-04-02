import React from 'react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { SignupHook } from '@/customHooks/user/signup';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import { HiHome, HiUser } from 'react-icons/hi';
import { IoCreateOutline } from "react-icons/io5";
import { RiMenu3Line } from "react-icons/ri";
import { TbLogs } from "react-icons/tb";

export const Drawer = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem("user");
    const { handleLogout } = SignupHook();

    const handleNavigation = (path) => {
        navigate(path);
        document?.activeElement?.blur(); // Close drawer
    };

    return (
        <Sheet>
            {/* Drawer Trigger */}
            <SheetTrigger>
                <RiMenu3Line className='text-amber-400 cursor-pointer' size={28} />
            </SheetTrigger>

            {/* Drawer Content */}
            <SheetContent side='right' className="overflow-y-auto p-6 w-64 bg-white shadow-lg rounded-l-lg">
                <SheetHeader>
                    <SheetTitle className="text-xl font-bold cursor-pointer" 
                    onClick={() => handleNavigation("/")}>My Blog</SheetTitle>
                </SheetHeader>
                <SheetDescription>
                </SheetDescription>
                {/* Navigation Buttons */}
                <div className="mt-6 flex flex-col gap-3">
                    <button onClick={() => handleNavigation("/")} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                        <HiHome size={20} /> <span>Home</span>
                    </button>
                    
                    {user ? (
                        <>
                            <button onClick={() => handleNavigation("/user/create-blog")} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                                <IoCreateOutline size={20} /> <span>Create Blog</span>
                            </button>
                            <button onClick={() => handleNavigation("/user/profile")} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                                <HiUser size={20} /> <span>Profile</span>
                            </button>
                            <button onClick={() => handleNavigation("/user/manage-blogs")} className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-100 transition">
                            <TbLogs  size={20}/><span>Manage Blogs</span>
                            </button>
                            <Button className="flex items-center gap-3 px-4 py-3 rounded-lg bg-red-500 text-white hover:bg-red-600 transition" variant="outline" onClick={handleLogout}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <Button onClick={() => handleNavigation("/login")} className="bg-amber-400 text-black flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-amber-500 transition">
                            Login
                        </Button>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};
