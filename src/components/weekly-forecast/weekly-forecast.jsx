import React from 'react';

import WeeklyForecastItem from './weekly-forecast-item/weekly-forecast-item';

import './weekly-forecast.css';

const WeeklyForecast = () => (
  <div className="weekly-forecast">
    <WeeklyForecastItem />
    <WeeklyForecastItem />
    <WeeklyForecastItem />
    <WeeklyForecastItem />
    <WeeklyForecastItem />
  </div>
);

export default WeeklyForecast;