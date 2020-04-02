import React from 'react';

import HeaderBar from '../header-bar/header-bar';
import WeatherDetails from '../weather-details/weather-details';
import WeeklyForecast from '../weekly-forecast/weekly-forecast';
import Spinner from '../spinner/spinner';

import './wrapper.css';
import UnitSwitch from '../unit-switch/unit-switch';

const Wrapper = ({ currentWeatherData, weeklyData, cityError, units, onChangeUnits, onChangeCity }) => {
  const content = cityError ? 
    <p>No city data. Please try again</p> : 
    <div className="weather-content">
      <WeatherDetails data={currentWeatherData} units={units} />
      <UnitSwitch units={units} onChangeUnits={onChangeUnits} />
      <WeeklyForecast data={weeklyData} units={units} />
    </div>;

  return (
    <div className="wrapper">
      <HeaderBar onChangeCity={onChangeCity} />
      {
        currentWeatherData && weeklyData
          ? content
          : <Spinner />
      }
    </div>
  )
};

export default Wrapper;