// src/Head.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css';
import companyLogo from '../assets/header/whole.png';
import searchIcon from '../assets/header/searchimage.svg';
import arrowDrop from '../assets/header/baseline-arrow_drop_down-24px.jpg';

function Head() {
  return (
    <header className="App-header">
      <img src={companyLogo} alt="Company Logo" className="company-logo" />
      <div className="search-container">
        <img src={searchIcon} alt="Search Logo" className="search-logo" />
        <input type="text" placeholder="Search for your favorite groups in ATG" className="input-text" />
        <div className="create-account">
          <span className="create-account-text">
            Create account.
          </span>
          <Link  to="/signup" className="free-text"> It’s free!</Link>
        </div>
        <Link to="/signup">
          <img src={arrowDrop} alt="ArrowDrop" className="arrow-drop" />
        </Link>
      </div>
    </header>
  );
}

export default Head;
