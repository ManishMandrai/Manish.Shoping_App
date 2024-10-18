import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  return showSearch ? (
    <div className=" text-center py-4 px-2 sm:px-0">
      <div className="relative inline-flex items-center justify-center w-full sm:w-3/4 md:w-2/3 border border-gray-400 px-2 py-2 rounded-lg bg-white">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm px-4 py-1 rounded"
          type="text"
          placeholder="Search products..."
        />
          <img
            src={assets.search_icon}
            alt="Search Icon"
            className="absolute mr-8 right-3 w-5 h-5 cursor-pointer"
          />
          <img
            onClick={() => setShowSearch(false)}
            className="inline w-5 h-5 cursor-pointer ml-3"
            src={assets.cross_icon}
            alt="Close Icon"
          />
      </div>
    </div>
  ) : null;
};

export default SearchBar;
