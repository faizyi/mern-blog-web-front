import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";
import { UpdateUserProfileHook } from "@/customHooks/user/updateUserProfile";

export const UserProfile = ({ handleLogout }) => {
  const { profilePic } = UpdateUserProfileHook();
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar className="w-12 h-12 border border-gray-300 hover:border-gray-400 transition duration-200">
            <AvatarImage src={profilePic} />
            <AvatarFallback className="text-gray-700">CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        {/* Ensure dropdown does not hide the scrollbar */}
        <DropdownMenuContent className="w-40 bg-white shadow-lg rounded-lg mt-2 border border-gray-200 overflow-visible">
          <DropdownMenuLabel className="text-gray-900 font-semibold px-4 py-2">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to="/user/profile">
            <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2 cursor-pointer transition duration-200">
              Profile
            </DropdownMenuItem>
          </Link>
          <Link to="/">
            <DropdownMenuItem className="hover:bg-gray-100 px-4 py-2 cursor-pointer transition duration-200">
              Blogs
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem
            onClick={handleLogout}
            className="hover:bg-gray-100 px-4 py-2 cursor-pointer transition duration-200"
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
