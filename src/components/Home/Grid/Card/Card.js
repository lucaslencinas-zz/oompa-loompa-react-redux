import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import OompaHeader from '../../../commons/OompaHeader';
import './Card.css';

const oompaUrl = ({ id }) => `/oompa-loompa/${id}`;

const Card = ({ oompa = {} }) => (
  <Link to={oompaUrl(oompa)} className="card">
    <img
      src={oompa.image}
      alt="OompaImage"
      className="oompa-card-image"
    />
    <OompaHeader oompa={oompa} />
  </Link>
);

Card.propTypes = {
  oompa: PropTypes.object.isRequired
};

export default Card;
