import React from 'react'
import { Button } from '../ui/button'
import { AspectRatio } from '../ui/aspect-ratio'
import { Link } from 'react-router-dom'

export const Hero = () => {
  return (
    <section className="relative w-full px-6"> 
      {/* Image Wrapper with Rounded Corners */}
      <div className="w-full rounded-md overflow-hidden">
        <AspectRatio ratio={26 / 9}>
          {/* <img
            src="/assets/heroImage/heroimage.webp"
            alt="Blog Hero Image"
            className="rounded-md object-cover w-full h-full brightness-35"
          /> */}
        </AspectRatio>
      </div>

      {/* Centered Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black px-6">
        <h2 className="font-bold text-sm:text-2xl md:text-3xl lg:text-4xl">
          Welcome to Our Blog
        </h2>
        <p className="text-lg sm:text-base md:text-lg mt-2">
          Stay informed with the latest insights, stories, and trends.
        </p>
        <Link to={"/login"}><Button className="mt-4 bg-black text-white">Get Started</Button></Link>
      </div>
    </section>
  )
}
