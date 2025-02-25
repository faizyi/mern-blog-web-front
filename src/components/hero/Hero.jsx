import React from 'react'
import { Button } from '../ui/button'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

export const Hero = () => {
  return (
    <section className="relative w-full h-[400px] overflow-hidden">
        <Carousel className="w-full h-full flex bg-black" 
        orientation='horizontal'
        opts={{ loop: true }}
        // ref={carouselRef}
        >
          <CarouselItem className="flex-shrink-0 w-full">
            <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white"
              style={{ backgroundImage: "url('/images/blog1.jpg')" }}>
              <h2 className="text-4xl text-gray-400 font-bold">Explore the Latest Tech Trends</h2>
              <p className="text-lg mt-2 text-gray-400">Stay updated with cutting-edge technology insights.</p>
              <Button className="mt-4 bg-white text-black">Read More</Button>
            </div>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 w-full">
            <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white"
              style={{ backgroundImage: "url('/images/blog2.jpg')" }}>
              <h2 className="text-4xl font-bold">Master the Art of Blogging</h2>
              <p className="text-lg mt-2">Learn how to create engaging and impactful blog posts.</p>
              <Button className="mt-4">Start Writing</Button>
            </div>
          </CarouselItem>
          <CarouselItem className="flex-shrink-0 w-full">
            <div className="relative w-full h-[400px] bg-cover bg-center flex flex-col justify-center items-center text-white"
              style={{ backgroundImage: "url('/images/blog3.jpg')" }}>
              <h2 className="text-4xl font-bold">Join Our Blogging Community</h2>
              <p className="text-lg mt-2">Connect with like-minded writers and share your ideas.</p>
              <Button className="mt-4">Join Now</Button>
            </div>
          </CarouselItem>
        </Carousel>
    </section>
  )
}
