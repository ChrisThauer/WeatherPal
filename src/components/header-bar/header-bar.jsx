import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './header-bar.css';

const HeaderBar = () => (
  <div className="header-bar">
    <h1 className="logo">WeatherPal</h1>
    <div className="search-bar">
      <input className="search-input" placeholder="Search city" />
      <div className="search-btn">
        <FontAwesomeIcon icon={faSearch} />
      </div>
    </div>
  </div>
);

export default HeaderBar;