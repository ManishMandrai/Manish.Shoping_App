import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div 
      className="relative min-h-screen min-w-screen flex items-center justify-start bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.hero_img})` }}
    >
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/10 to-transparent"></div>
      
      {/* Content */}
      <div className="relative z-10 text-white px-4 sm:px-8 md:px-12 lg:px-24 py-24">
        <div className="max-w-2xl space-y-6">
          <p className="font-medium uppercase tracking-widest text-gray-300">
            Spring Collection 2025
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Elevate Your Everyday Style
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-xl">
            Discover premium craftsmanship and contemporary designs that redefine modern fashion.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mt-8">
            <Link 
              to="/Collection" 
              className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Explore Collection
            </Link>
            <Link 
              to="/Sale" 
              className="border-b-2 border-white pb-1 hover:border-transparent transition-all duration-300"
            >
              Shop the Sale →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;