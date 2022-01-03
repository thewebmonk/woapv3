import React, { useEffect, useRef, useState } from 'react';
import searchIcon from '../../../assets/icons/search.svg';
import { createClient } from 'contentful';
import { Link } from 'gatsby';
import { transformSearchResult } from '../../../transformers';
import { useIsMobile } from '../../../hooks';
const client = createClient({
  space: process.env.GATSBY_CTF_SPACE_ID,
  accessToken: process.env.GATSBY_CTF_CDA_TOKEN
});

const Search = () => {
  const [results, setResults] = useState([]);
  const [focus, setFocus] = useState(false);
  const [searchText, setSearchText] = useState('');
  let timeVar = null;
  const isMobile = useIsMobile(1200);
  const inputRef = useRef(null);

  const onSeach = (e) => {
    clearTimeout(timeVar);
    const query = e.target.value;
    setSearchText(query);
    if (!query) {
      setResults([]);
      return;
    }
    timeVar = setTimeout(async () => {
      try {
        const res = await client.getEntries({
          content_type: 'blog',
          select: 'fields.title,fields.slug',
          'fields.title[match]': query
        });
        setResults(transformSearchResult(res));
      } catch (err) {
        // console.log(err);
      }
    }, 500);
  };
  const handleBlur = (e) => {
    setFocus(false);
    setResults([]);
  };
  const handleImageClick = () => {
    setFocus(true);
    setTimeout(() => {
      inputRef.current.focus();
    });
  };
  useEffect(() => {
    if (focus) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [focus]);
  return (
    <div
      className={`search-box ${isMobile && focus ? 'search-box-mobile' : ''} ${
        focus ? 'search-box-focused' : ''
      }`}
    >
      {focus && <div className="overlay" onClick={handleBlur}></div>}
      <input
        ref={inputRef}
        onFocus={() => setFocus(true)}
        onChange={onSeach}
        placeholder="type here to search..."
      />
      <img
        className="search-icon"
        src={searchIcon}
        alt="Search Icon"
        onClick={handleImageClick}
      />
      {focus && (
        <div className="search-result">
          {results.length ? (
            results.map((result) => (
              <Link
                onClick={() => console.log('helllo')}
                className="result"
                to={`/blog/${result.slug}`}
              >
                <h5 className="title">{result.title}</h5>
              </Link>
            ))
          ) : (
            <p className="text-white p-3 m-0 text-center">
              {searchText ? 'No result found for your search' : ''}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
