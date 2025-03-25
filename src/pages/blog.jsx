import React from 'react'
import { useParams } from 'react-router-dom'

export const Blog = () => {
    const { title, id} = useParams();
    console.log(title, id);
    
  return (
    <div>blog</div>
  )
}
