import React from 'react';

const Search = () => {
  return (
    <div className="search-box">
      <input placeholder="type here to search..." />
      <img
        className="search-icon"
        src="/images/icons/search.svg"
        alt="Search Icon"
      />
    </div>
  );
};

export default Search;
