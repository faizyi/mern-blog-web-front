import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className="w-full bg-white shadow-md p-4 flex justify-between items-center fixed top-0 z-50">
        <Link to={"/"}><h1 className=''>My Blog</h1></Link>
        <Link to="/login">
        <Button variant="outline" className={"bg-black text-white cursor-pointer hover:bg-black/80"}>Login</Button>
        </Link>
    </header>
  )
}
