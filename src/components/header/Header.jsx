import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { UserProfile } from "../userProfile/UserProfile";
import { SignupHook } from "@/customHooks/user/signup";
import { BlogSerach } from "../blogSearch/blogSerach";

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

      {/* Navigation */}
      <nav className="flex items-center gap-4">
      <BlogSerach/>
        {user ? (
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="outline" className="px-4 py-2">Home</Button>
            </Link>
            <Link to="/user/create/blog">
              <Button variant="outline" className="px-4 py-2">Create Blog</Button>
            </Link>
            <UserProfile handleLogout={handleLogout}/>
          </div>
        ) : (
          <Link to="/login">
            <Button
              variant="outline"
              className="bg-black text-white px-5 py-2 rounded-md hover:bg-black/80 transition duration-200"
            >
              Login
            </Button>
          </Link>
        )}
        
      </nav>
    </header>
  );
};
