import { AllBlogs } from '@/components/allBlogs/AllBlogs'
import { Hero } from '@/components/hero/Hero'
import React from 'react'

export const Home = () => {
  return (
    <div className="min-h-screen mt-19 container">
        <Hero/>
        <AllBlogs/>
    </div>
  )
}
