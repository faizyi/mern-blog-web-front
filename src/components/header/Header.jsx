import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'
import { SignupHook } from '@/customHooks/user/signup';

export const Header = () => {
  const user = localStorage.getItem('user');
  const {handleLogout} = SignupHook();
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 z-50">
        <Link to={"/"}><h1 className=''>My Blog</h1></Link>
        {user ? (
          <div className="flex gap-4">
            <Link to="/"><Button variant="outline">Home</Button></Link>
            <Link to="/user/create/blog"><Button variant="outline">Create Blog</Button></Link>
            <Link to="/user/profile"><Button variant="outline">Profile</Button></Link>
            <Button 
            onClick={handleLogout}
             className="bg-black text-white">Logout</Button>
          </div>
        ) : (
          <Link to="/login">
          <Button variant="outline" className={"bg-black text-white cursor-pointer hover:bg-black/80"}>Login</Button>
          </Link>
        )}
    </header>
  )
}
