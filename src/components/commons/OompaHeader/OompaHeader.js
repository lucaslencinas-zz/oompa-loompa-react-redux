import React from 'react';
import PropTypes from 'prop-types';
import './OompaHeader.css';

const genderMap = {
  F: 'Female',
  M: 'Male'
};

const OompaHeader = ({ oompa = {} }) => (
  <div className="oompa-header">
    <div className="oompa-header-name">{oompa.first_name} {oompa.last_name}</div>
    <div className="oompa-header-gender">
      {genderMap[oompa.gender]}
    </div>
    <div className="oompa-header-profession">{oompa.profession}</div>
  </div>
);

OompaHeader.propTypes = {
  oompa: PropTypes.object.isRequired
};

export default OompaHeader;
