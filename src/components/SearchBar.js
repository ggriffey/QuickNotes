import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <MdSearch className="search-icon" />
      <input type="text" placeholder="Search notes" />
    </div>
  );
};

export default SearchBar;
