import React from 'react';
import PropTypes from 'prop-types';
import OompaPropTypes from '../../commons/Oompa';
import InfiniteScroll from '../../InfiniteScroll';
import Card from './Card';
import './Grid.css';

const Grid = ({ oompas = [], hasMoreOompas, onLoadOompas, isFiltering }) => (
  <InfiniteScroll
    hasMore={hasMoreOompas}
    onLoadMore={onLoadOompas}
    isFiltering={isFiltering}
  >
    <div className="grid">
      {oompas.map((oompa) => (
        <div key={oompa.id} className="card-wrapper">
          <Card oompa={oompa} />
        </div>
      ))}
    </div>
  </InfiniteScroll>
);

Grid.propTypes = {
  oompas: PropTypes.arrayOf(OompaPropTypes).isRequired,
  onLoadOompas: PropTypes.func.isRequired,
  hasMoreOompas: PropTypes.bool.isRequired,
  isFiltering: PropTypes.bool.isRequired
};

export default Grid;
