import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="container mx-auto px-4 md:px-20">
      {/* About Section */}
      <div className="text-3xl text-center pt-8 border-t">
        <Title text1="About" text2="Us" />
      </div>

      {/* About Us Content */}
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-lg"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            At our core, we are passionate about delivering high-quality products that inspire confidence and satisfaction. With a deep commitment to innovation, we ensure that our offerings meet the diverse needs of our customers, while maintaining the highest standards of quality and reliability.
          </p>
          <p>
            Our journey is driven by our desire to create lasting relationships with our clients, built on trust, integrity, and unparalleled customer service. We are constantly evolving and adapting to the ever-changing market to bring you the best of what we have to offer.
          </p>
          <b className="text-gray-800 text-xl">Our Mission</b>
          <p>
            Our mission is simple: to provide products and services that exceed customer expectations. We strive to be a trusted brand, known for quality, innovation, and a customer-centric approach. Our goal is to continually improve and bring you the best in both functionality and style.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-3xl text-center py-8">
        <Title text1="Why" text2="Choose Us" />
      </div>

      {/* Why Choose Us Content */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-20">
        <div className="border px-10 py-8 flex flex-col gap-5 shadow-lg rounded-lg">
          <b className="text-lg">Quality Assurance</b>
          <p className="text-gray-600">
            We take pride in the quality of our products. Each item undergoes rigorous testing and quality control to ensure it meets our high standards. Our commitment to excellence ensures that you receive only the best.
          </p>
        </div>
        <div className="border px-10 py-8 flex flex-col gap-5 shadow-lg rounded-lg">
          <b className="text-lg">Customer Support</b>
          <p className="text-gray-600">
            Our dedicated customer support team is available 24/7 to assist you with any questions or concerns. We believe in going the extra mile to ensure you have a smooth and satisfying experience with us.
          </p>
        </div>
        <div className="border px-10 py-8 flex flex-col gap-5 shadow-lg rounded-lg">
          <b className="text-lg">Timely Delivery</b>
          <p className="text-gray-600">
            We understand the importance of timely delivery. Our efficient logistics team ensures that your orders arrive on time, every time, so you can enjoy your purchases without delay.
          </p>
        </div>
      </div>

      {/* Newsletter Section */}
      <NewsletterBox />
    </div>
  );
};

export default About;
