import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="pt-8">
      <div className="flex flex-col sm:flex-row border border-gray-300 shadow-lg rounded-lg overflow-hidden">
        {/* Left side */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-12 sm:py-0 bg-gray-50">
          <div className="text-[#333333] px-8 sm:px-12">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-sm md:text-base text-gray-600 uppercase">Top Picks</p>
            </div>
            <h1 className="prata-regular text-4xl sm:py-3 lg:text-6xl leading-snug">
              New Season Styles
            </h1>
            <p className="text-base lg:text-lg py-2 text-gray-600">
              Explore the latest trends and timeless designs.
            </p>
            <div className="flex items-center gap-4 mt-4">
              <Link to='/latestCollection'>
              <button className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300">
                Shop Now
              </button>
              </Link>
              <p className="w-8 md:w-10 h-[2px] bg-[#333333]"></p>
            </div>
          </div>
        </div>
        {/* Right side */}
        <img className="w-full sm:w-1/2 object-cover" src={assets.hero_img} alt="Hero" />
      </div>
    </div>
  );
};

export default Hero;
