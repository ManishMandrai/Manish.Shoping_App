import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-6 text-center py-16 ">
      {/* Policy Item: Easy Exchange */}
      <div className="hover:shadow-lg transition-all duration-300 p-4 rounded-md">
        <img src={assets.exchange_icon} className="w-12 m-auto mb-4" alt="Easy Exchange" />
        <p className="font-semibold text-gray-700">Easy Exchange Policy</p>
        <p className="text-gray-500 mt-2">Enjoy hassle-free exchanges on all products.</p>
      </div>
      
      {/* Policy Item: Return Policy */}
      <div className="hover:shadow-lg transition-all duration-300 p-4 rounded-md">
        <img src={assets.quality_icon} className="w-12 m-auto mb-4" alt="Return Policy" />
        <p className="font-semibold text-gray-700">7-Day Return Policy</p>
        <p className="text-gray-500 mt-2">We offer a 7-day free return policy for your convenience.</p>
      </div>
      
      {/* Policy Item: Customer Support */}
      <div className="hover:shadow-lg transition-all duration-300 p-4 rounded-md">
        <img src={assets.support_img} className="w-12 m-auto mb-4" alt="Customer Support" />
        <p className="font-semibold text-gray-700">24/7 Customer Support</p>
        <p className="text-gray-500 mt-2">We are here to assist you anytime, anywhere.</p>
      </div>
    </div>
  );
};

export default OurPolicy;
