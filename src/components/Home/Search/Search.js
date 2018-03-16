import React from 'react';
import './Search.css';

const searchImgUrl = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png';

const Search = () => (
  <div className="search">
      <div className="input-container">
        <input type="text" className="input-text" />
        <div className="input-separator" />
        <div className="input-icon">
          <img src={searchImgUrl} alt="SearchImgUrl" className="input-image" />
        </div>
      </div>
  </div>
);

export default Search;
