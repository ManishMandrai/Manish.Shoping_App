import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center py-4">
      <div className="relative inline-flex items-center justify-center w-3/4 sm:w-1/2 border border-gray-400 px-2 py-2 rounded-full bg-white">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm px-4 rounded-full"
          type="text"
          placeholder="Search"
        />
        <img
          src={assets.search_icon}
          alt="Search Icon"
          className="absolute right-3 w-4 h-4 cursor-pointer"
        />
      </div>
      <img
        onClick={() => setShowSearch(false)}
        className="inline w-3 cursor-pointer ml-2"
        src={assets.cross_icon}
        alt="Close Icon"
      />
    </div>
  ) : null;
};

export default SearchBar;
