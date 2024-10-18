import React from "react";

const Title = ({ text1, text2 }) => {  // Destructure text1 and text2 from the props object
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500 uppercase">
        {text1} <span className="text-gray-700 font-medium">{text2}</span>
      </p>
      <p className="w-8 sm:w-12 h-[1px] sm:h-[2px] bg-gray-700"></p>  {/* Corrected the height class */}
    </div>
  );
};

export default Title;
