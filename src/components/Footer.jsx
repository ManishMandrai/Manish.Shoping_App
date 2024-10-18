import React, { useEffect, useState } from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { RxTwitterLogo } from 'react-icons/rx'; // X (formerly Twitter)

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="bg-[#171717] text-white py-10 mt-40">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Footer Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold mb-2">About Us</h3>
            <p className="text-sm text-gray-300">
              We are a team dedicated to delivering top-quality products that combine style and function. With a passion for craftsmanship and attention to detail, we ensure every item meets our high standards.
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-xl font-bold mb-2">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.instagram.com/manish._.mandrai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-pink-400 transition-colors duration-300"
              >
                <FaInstagram size={30} />
              </a>
              <a
                href="https://github.com/ManishMandrai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-gray-400 transition-colors duration-300"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/manish-kumar-mandrai/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://x.com/ManishKumar3114"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
              >
                <RxTwitterLogo size={30} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:text-right">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="/about" className="hover:text-pink-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
             
              <li>
                <a href="/contact" className="hover:text-pink-400 transition-colors duration-300">
                  Contact Us
                </a>
              </li>
             
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
          <p>© {currentYear} Manish Kumar. All Rights Reserved.</p>
          <p>Built with ❤️ by Manish Kumar</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
