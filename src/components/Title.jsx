import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex flex-col">
        <p className="text-gray-500 uppercase tracking-wide text-sm sm:text-base">
          {text1}
        </p>
        <span className="text-gray-800 font-bold text-lg sm:text-2xl mt-1">
          {text2}
        </span>
      </div>
      <div className="flex-grow h-[2px] sm:h-[3px] bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 rounded-full"></div>
    </div>
  );
};

export default Title;
