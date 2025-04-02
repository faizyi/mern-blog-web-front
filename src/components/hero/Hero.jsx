import React from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import heroImg from "../../../public/assets/heroImage/hero.avif";

export const Hero = () => {
  const user = localStorage.getItem("user");

  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center
     justify-between px-8 py-12 md:px-16 lg:px-24 h-auto md:h-[460px] bg-gray-100 rounded-lg
      shadow-lg mt-25 mb-9">
      {/* Left Text Content */}
      <div className="text-center md:text-left max-w-xl">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-gray-900 leading-tight">
          Welcome to Our Blog
        </h2>
        <p className="text-lg sm:text-base md:text-lg mt-4 text-gray-700">
          Stay informed with the latest insights, stories, and trends.
        </p>

        {user ? (
          <Link to="/user/create-blog">
            <Button className="bg-amber-500 mt-6 text-white px-6 py-3 rounded-lg hover:bg-amber-400 transition duration-200 shadow-md">
              Create Blog
            </Button>
          </Link>
        ) : (
          <Link to="/login">
            <Button className="bg-amber-500 mt-6 text-white px-6 py-3 rounded-lg hover:bg-amber-400 transition duration-200 shadow-md">
              Get Started
            </Button>
          </Link>
        )}
      </div>

      {/* Right Image */}
      {/* <div className="w-full md:w-1/2 flex justify-center md:justify-end"> */}
        <img
          src={heroImg}
          alt="Hero"
          className="object-cover rounded-2xl w-full md:w-[500px] h-[150px] md:h-[400px] shadow-lg"
        />
      {/* </div> */}
    </section>
  );
};
