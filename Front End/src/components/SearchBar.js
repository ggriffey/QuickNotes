import React from "react";
import { MdSearch } from "react-icons/md";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="search-bar">
      <MdSearch className="search-icon" />
      <input
        onChange={(event) => handleSearch(event.target.value)}
        type="text"
        placeholder="Search notes..."
      />
    </div>
  );
};

export default SearchBar;
