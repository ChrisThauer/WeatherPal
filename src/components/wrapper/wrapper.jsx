import React from 'react';

import HeaderBar from '../header-bar/header-bar';
import WeatherDetails from '../weather-details/weather-details';
import WeeklyForecast from '../weekly-forecast/weekly-forecast';
import Spinner from '../spinner/spinner';

import './wrapper.css';
import UnitSwitch from '../unit-switch/unit-switch';

const Wrapper = ({ data, cityError, units, onChangeUnits, onChangeCity }) => {
  const content = cityError ? 
    <p>No city data. Please try again</p> : 
    <div className="weather-content">
      <WeatherDetails data={data} units={units} />
      <UnitSwitch units={units} onChangeUnits={onChangeUnits} />
      <WeeklyForecast />
    </div>;

  return (
    <div className="wrapper">
      <HeaderBar onChangeCity={onChangeCity} />
      {
        data
          ? content
          : <Spinner />
      }
    </div>
  )
};

export default Wrapper;