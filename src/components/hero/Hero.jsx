import React from 'react'
import { Button } from '../ui/button'
import { AspectRatio } from '../ui/aspect-ratio'
import { Link } from 'react-router-dom'
import heroImg from "../../../public/assets/heroImage/hero.avif"
export const Hero = () => {
  const user = localStorage.getItem("user");
  return (
    <section className="w-full mt-30 h-80">
      {/* Image Wrapper with Rounded Corners */}
      {/* <div className="w-full rounded-md overflow-hidden">
        <AspectRatio ratio={26 / 9}>
        </AspectRatio>
      </div> */}

      {/* Centered Text Content */}
      <div className="flex flex-col h-80 items-center justify-center text-center
       text-black px-6">
        <h2 className="font-bold 
        // text-sm:text-2xl md:text-3xl 
        text-4xl">
          Welcome to Our Blog
        </h2>
        <p className="text-lg 
        // sm:text-base md:text-lg
         mt-2">
          Stay informed with the latest insights, stories, and trends.
        </p>
        {user ?
          <Link to={"/login"}><Button className="bg-amber-400 mt-3 text-black px-5 py-2 rounded-md
                hover:bg-amber-300 transition duration-200">Create Blog</Button></Link> :
          <Link to={"/login"}><Button className="bg-amber-400 mt-3 text-black px-5 py-2 rounded-md
                hover:bg-amber-300 transition duration-200">Get Started</Button></Link>}

      </div>
    </section>
  )
}
