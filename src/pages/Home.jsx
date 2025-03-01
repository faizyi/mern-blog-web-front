import { AllBlogs } from '@/components/allBlogs/AllBlogs'
import { Footer } from '@/components/footer/Footer'
import { Hero } from '@/components/hero/Hero'
import React from 'react'

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100 mt-19">
        <Hero/>
        <AllBlogs/>
        <Footer/>
    </div>
  )
}
