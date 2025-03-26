import React from "react";
import { Button } from "../ui/button";

const categories = [
  "All",
  "Personal & Lifestyle",
  "Business & Marketing",
  "Technology & Programming",
  "Educational & Informational",
  "Sports",
  "Entertainment & Media",
  "Art & Creative",
  "News & Current Events",
];

export const BlogCategories = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="flex gap-3 flex-wrap w-[900px] mb-6">
      {categories.map((category) => (
        <Button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`px-6 py-2 border border-[#D2D2D1] bg-[#FCFCFC] 
            text-[#1A1A19] rounded-full cursor-pointer transition-all duration-300 ease-in-out hover:bg-[#EFEFEE] ${
            selectedCategory === category ? "bg-[#EFEFEE]" : ""
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
