import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const oompaImgUrl = 'https://s3.eu-central-1.amazonaws.com/napptilus/level-test/imgs/logo-umpa-loompa.png';

const Navbar = () => (
  <div className="navbar">
    <Link to="/" className="navbar-link">
      <div className="navbar-content">
        <img src={oompaImgUrl} alt="OompaImgUrl" className="navbar-image" />
        <div className="navbar-text">Oompa Looompas Crew</div>
      </div>
    </Link>
  </div>
);

export default Navbar;
