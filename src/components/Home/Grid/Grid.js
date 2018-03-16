import React from 'react';
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

export default Grid;
