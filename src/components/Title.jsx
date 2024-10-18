import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex items-center gap-4 mb-4">
      <p className="text-gray-500 uppercase tracking-wider">
        {text1}{" "}
        <span className="text-gray-800 font-semibold text-lg sm:text-xl">
          {text2}
        </span>
      </p>
      <p className="w-16 sm:w-24 h-[2px] sm:h-[3px] bg-gradient-to-r from-gray-400 via-gray-600 to-gray-800 rounded"></p>
    </div>
  );
};

export default Title;
