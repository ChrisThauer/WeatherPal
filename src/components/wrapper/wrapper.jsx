import React from 'react';

import HeaderBar from '../header-bar/header-bar';
import WeatherDetails from '../weather-details/weather-details';

import './wrapper.css';

const Wrapper = ({ data }) => (
  <div className="wrapper">
    <HeaderBar />
    {
      data
        ? <WeatherDetails data={data} />
        : <div>Loading</div>
    }
  </div>
);

export default Wrapper;