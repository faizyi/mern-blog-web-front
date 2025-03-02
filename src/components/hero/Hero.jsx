import React from 'react'
import { Button } from '../ui/button'
// import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { AspectRatio } from '../ui/aspect-ratio'

export const Hero = () => {
  return (
    <section className="relative w-full px-6"> 
      {/* <Carousel className="w-full h-full flex" orientation="horizontal" opts={{ loop: true }}>
        <CarouselItem className="relative flex-shrink-0 w-full"> */}
          {/* Image Wrapper with Rounded Corners */}
          <div className="w-full rounded-md overflow-hidden">
            <AspectRatio ratio={26 / 9}>
              <img
                src="/assets/heroImage/heroimage.webp"
                alt="Image"
                className="rounded-md object-cover w-full h-full brightness-35"
              />
            </AspectRatio>
          </div>

          {/* Centered Text Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
            {/* <h2 className="font-bold text- sm:text-2xl md:text-2xl lg:text-3xl">
              Explore the Latest Tech Trends
            </h2> */}
            {/* <p className="text-lg sm:text-base md:text-lg mt-2">
              Stay updated with cutting-edge technology insights.
            </p>
            // <Button className="mt-4 bg-white text-black">Read More</Button> */}
          </div>
        {/* </CarouselItem>
      </Carousel> */}
    </section>
  )
}
