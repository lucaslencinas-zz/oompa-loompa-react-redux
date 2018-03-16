import React from 'react';
import './OompaHeader.css';

const OompaHeader = ({ oompa = {} }) => (
  <div className="oompa-header">
    <div className="oompa-header-name">{oompa.first_name} {oompa.last_name}</div>
    <div className="oompa-header-gender">{oompa.gender === 'F' ? 'Female' : 'Male'}</div>
    <div className="oompa-header-profession">{oompa.profession}</div>
  </div>
);

export default OompaHeader;
