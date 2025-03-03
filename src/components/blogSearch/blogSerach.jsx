import React from 'react'
import { Input } from '../ui/input'

export const BlogSerach = () => {
  return (
    <div className="relative w-full max-w-lg">
         <Input
          type="text"
          placeholder="Search blogs..."
        //   value={query}
        //   onChange={handleSearch}
          className="w-[150px] sm:w-[400px] md:w-[400px] lg:w-[500px] bg-transparent 
          focus:outline-none text-gray-800 placeholder-gray-400"
        />
    </div>
  )
}
