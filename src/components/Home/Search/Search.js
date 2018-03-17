import React from 'react';
import PropTypes from 'prop-types';
import './Search.css';

const searchImgUrl = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/ic_search.png';

const Search = ({ handleChange }) => (
  <div className="search">
    <div className="input-container">
      <input
        type="text"
        className="input-text"
        placeholder="Search"
        onChange={(event) => handleChange(event.target.value)}
      />
      <div className="input-separator" />
      <div className="input-icon">
        <img
          src={searchImgUrl}
          alt="SearchImgUrl"
          className="input-image"
        />
      </div>
    </div>
  </div>
);

Search.propTypes = {
  handleChange: PropTypes.func.isRequired
};

export default Search;
