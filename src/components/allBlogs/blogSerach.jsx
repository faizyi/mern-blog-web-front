import React from 'react'
import { Input } from '../ui/input'

export const BlogSerach = () => {
  return (
    <div className="relative w-full max-w-lg">
         <Input
          type="text"
          placeholder="Search blog Category eg. Technology, Bussiness, Sport etc "
        //   value={query}
        //   onChange={handleSearch}
          className="w-[150px] sm:w-[400px] border-3 border-t-3 border-l-3 
          border-r-3 md:w-[400px] lg:w-[500px] 
           text-white placeholder-gray-400"
        />
    </div>
  )
}
