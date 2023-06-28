import React from "react";
import { MdSearch } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <MdSearch className="search-icon" />
      <input
        onChange={(event) => handleSearch(event.target.value)}
        type="text"
        placeholder="Search notes..."
      />
      {/* <RxHamburgerMenu className="hamburger-icon" /> */}
      {/* (onClick={handleMenuClick}) */}
    </div>
  );
};

export default SearchBar;
