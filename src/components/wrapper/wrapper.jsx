import React from 'react';

import HeaderBar from '../header-bar/header-bar';
import WeatherDetails from '../weather-details/weather-details';
import Spinner from '../spinner/spinner';

import './wrapper.css';

const Wrapper = ({ data, getCityData, cityError }) => {
  const content = cityError ? <p>No city data. Please try again</p> : <WeatherDetails data={data} />;

  return (
    <div className="wrapper">
      <HeaderBar getCityData={getCityData} />
      {
        data
          ? content
          : <Spinner />
      }
    </div>
  )
};

export default Wrapper;