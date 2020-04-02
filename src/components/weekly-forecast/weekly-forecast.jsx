import React from 'react';

import WeeklyForecastItem from './weekly-forecast-item/weekly-forecast-item';

import './weekly-forecast.css';

const WeeklyForecast = ({ data }) => {
  return (
    <div className="weekly-forecast">
      {
        data.map(weatherData => (
          <WeeklyForecastItem data={weatherData} key={weatherData.dt} />
        ))
      }
    </div>
  )
};

export default WeeklyForecast;