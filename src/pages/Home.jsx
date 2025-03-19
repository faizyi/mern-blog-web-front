import { AllBlogs } from '@/components/allBlogs/AllBlogs'
import { Footer } from '@/components/footer/Footer'
import { Hero } from '@/components/hero/Hero'
import React from 'react'

export const Home = () => {
  return (
    <div className="min-h-screen mt-19" id='container'>
        <Hero/>
        <AllBlogs/>
    </div>
  )
}
