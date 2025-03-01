import React from "react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Link } from "react-router-dom";

export const UserProfile = ({handleLogout}) => {
  return (
    <div className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none">
          <Avatar className="w-10 h-10 border border-gray-300 hover:border-gray-400 transition duration-200">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback className="text-gray-700">CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="w-18 mr-4 bg-white shadow-lg rounded-lg p-2 mt-2 border border-gray-200">
          <DropdownMenuLabel className="text-gray-900 font-semibold">
            My Account
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link to="/user/profile">
          <DropdownMenuItem className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer transition duration-200">
            Profile
          </DropdownMenuItem>
          </Link>
          <DropdownMenuItem
          onClick={handleLogout}
           className="hover:bg-gray-100 px-3 py-2 rounded-md cursor-pointer transition duration-200">
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
