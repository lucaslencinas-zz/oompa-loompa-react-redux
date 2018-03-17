import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './Grid.css';

const Grid = ({ oompas = [] }) => (
  <div className="grid">
    {oompas.map((oompa, index) => (
      <div key={`${index}a`} className="card-wrapper">
        <Card oompa={oompa} />
      </div>
    ))}
  </div>
);

Grid.propTypes = {
  oompas: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Grid;
