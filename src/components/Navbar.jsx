import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  return (
    <div className="bg-white px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] border-b-2 border-gray-200 shadow-sm fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between py-5 font-semibold text-gray-800">
        <Link to="/">
          <img
            src={assets.logo}
            className="w-36 transition-transform duration-300 hover:scale-105"
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden sm:flex gap-8 text-lg">
          <NavLink
            to="/"
            className="flex flex-col items-center gap-1 group"
            activeClassName="text-black"
          >
            <p className="group-hover:text-black transition-colors duration-300">
              Home
            </p>
            <hr className="w-2/4 border-none h-[2px] bg-gray-600 group-hover:bg-black hidden group-hover:block" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1 group"
            activeClassName="text-black"
          >
            <p className="group-hover:text-black transition-colors duration-300">
              Collection
            </p>
            <hr className="w-2/4 border-none h-[2px] bg-gray-600 group-hover:bg-black hidden group-hover:block" />
          </NavLink>
          <NavLink
            to="/about"
            className="flex flex-col items-center gap-1 group"
            activeClassName="text-black"
          >
            <p className="group-hover:text-black transition-colors duration-300">
              About
            </p>
            <hr className="w-2/4 border-none h-[2px] bg-gray-600 group-hover:bg-black hidden group-hover:block" />
          </NavLink>
          <NavLink
            to="/contact"
            className="flex flex-col items-center gap-1 group"
            activeClassName="text-black"
          >
            <p className="group-hover:text-black transition-colors duration-300">
              Contact
            </p>
            <hr className="w-2/4 border-none h-[2px] bg-gray-600 group-hover:bg-black hidden group-hover:block" />
          </NavLink>
        </ul>

        {/* Icons Section */}
        <div className="flex items-center gap-6">
          {/* Search Icon: Click to show the SearchBar */}
          <img
            onClick={() => setShowSearch(true)}
            src={assets.search_icon}
            className="w-6 cursor-pointer hover:opacity-80 transition-opacity duration-300"
            alt="Search"
          />

          {/* Profile Icon */}
          <div className="relative group">
            <Link to="/login">
              <img
                src={assets.profile_icon}
                alt="Profile"
                className="w-5 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              />
            </Link>
            <div className="absolute right-0 hidden group-hover:block bg-white border border-gray-200 shadow-lg mt-2 w-36 py-3 px-5 rounded-md">
              <p className="cursor-pointer hover:text-black transition-colors duration-300">
                My Profile
              </p>
              <p className="cursor-pointer hover:text-black transition-colors duration-300">
                Orders
              </p>
              <p className="cursor-pointer hover:text-black transition-colors duration-300">
                Logout
              </p>
            </div>
          </div>

          {/* Cart Icon with Item Count */}
          <Link to="/cart" className="relative">
            <img
              src={assets.cart_icon}
              className="w-5 cursor-pointer hover:opacity-80 transition-opacity duration-300"
              alt="Cart"
            />
            <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center bg-red-600 text-white rounded-full text-xs">
              {getCartCount()}
            </p>
          </Link>

          {/* Mobile Menu Icon */}
          <img
            onClick={() => setVisible(true)}
            src={assets.menu_icon}
            className="w-6 cursor-pointer hover:opacity-80 transition-opacity duration-300 sm:hidden"
            alt="Menu"
          />
        </div>

        {/* Sidebar for Mobile Navigation */}
        <div
          className={`fixed top-0 right-0 bottom-0 bg-white transition-all z-50 shadow-lg ${
            visible ? "w-full" : "w-0"
          } overflow-hidden`}
        >
          <div className="flex flex-col text-gray-600 h-full">
            <div
              onClick={() => setVisible(false)}
              className="flex items-center gap-4 p-5 cursor-pointer bg-gray-100"
            >
              <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
              <p>Back</p>
            </div>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-8 text-lg border-b"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-8 text-lg border-b"
              to="/collection"
            >
              Collection
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-8 text-lg border-b"
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              onClick={() => setVisible(false)}
              className="py-4 pl-8 text-lg border-b"
              to="/contact"
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
