import React from 'react';
import searchIcon from '../../../assets/icons/search.svg';
const Search = () => {
  return (
    <div className="search-box">
      <input placeholder="type here to search..." />
      <img className="search-icon" src={searchIcon} alt="Search Icon" />
    </div>
  );
};

export default Search;
