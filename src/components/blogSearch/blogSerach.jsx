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
          className="w-full bg-transparent focus:outline-none text-gray-800 placeholder-gray-400"
        />
    </div>
  )
}
