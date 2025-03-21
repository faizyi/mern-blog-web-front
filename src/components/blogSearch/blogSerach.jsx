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
          className="w-[150px] sm:w-[400px] border-b-3 border-t-0 border-l-0 
          border-r-0 md:w-[400px] lg:w-[500px] 
           text-white placeholder-gray-400"
        />
    </div>
  )
}
