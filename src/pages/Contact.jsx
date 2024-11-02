import React from "react";
import { assets } from "../assets/assets";
import Title from '../components/Title';
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="container mt-20 mx-auto px-4 md:px-20">
      {/* Contact Title */}
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1="Contact" text2="Us" />
      </div>

      {/* Contact Details & Image */}
      <div className="my-10 flex flex-col md:flex-row gap-10 mb-28">
        <img className="w-full md:max-w-[480px] rounded-lg shadow-lg" src={assets.contact_img} alt="Contact Us" />
        <div className="flex flex-col justify-center gap-6 text-gray-600">
          <div>
            <p className="font-semibold text-xl">Our Store</p>
            <p className="text-gray-500">123 Commerce St, Suite 200 <br/> City, State, 12345</p>
          </div>
          <div>
            <p className="font-semibold text-xl">Call Us</p>
            <p className="text-gray-500">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="font-semibold text-xl">Email Us</p>
            <p className="text-gray-500">support@yourstore.com</p>
          </div>
          <div>
            <p className="font-semibold text-xl">Careers</p>
            <p className="text-gray-500">Looking to join our team? <br/> Reach us at careers@yourstore.com</p>
          </div>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-16">
        <NewsletterBox />
      </div>
    </div>
  );
};

export default Contact;
