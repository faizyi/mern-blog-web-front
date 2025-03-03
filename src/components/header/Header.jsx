import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserProfile } from "../../../src/components/userProfile/userProfile";
import { SignupHook } from "@/customHooks/user/signup";
import { BlogSerach } from "../blogSearch/blogSerach";
import { Drawer } from "../drawer/drawer";

export const Header = () => {
  const user = localStorage.getItem("user");
  const { handleLogout } = SignupHook();
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 flex justify-between items-center 
    fixed top-0 z-50">
      {/* Logo */}
      <Link to={"/"}>
        <h1 className="text-xl font-bold text-gray-900 hover:text-gray-700 transition duration-200">
          My Blog
        </h1>
      </Link>
      <div className="flex items-center gap-4">
        <BlogSerach />
      <div className="sm:flex md:hidden lg:hidden">
        {/* <SidebarDrawer /> */}
        <Drawer/>
      </div>
        <div className="hidden sm:hidden md:flex lg:flex items-center gap-4">
      <nav className="flex items-center gap-4">
      {/* Navigation */}
        <Link to="/">
        <Button variant="outline" className="px-4 py-2">Home</Button>
      </Link>
        {user ? (
          <div className="flex items-center gap-4 ">
            <Link to="/user/create/blog">
              <Button variant="outline" className="px-4 py-2">Create Blog</Button>
            </Link>
            <UserProfile handleLogout={handleLogout} />
          </div>
        ) : (
            <Link to="/login">
              <Button
                variant="outline"
                className="bg-black text-white px-5 py-2 rounded-md
               hover:bg-black/80 transition duration-200"
              >
                Login
              </Button>
            </Link>
        )}

      </nav>
        </div>
        </div>
    </header>
  );
};
