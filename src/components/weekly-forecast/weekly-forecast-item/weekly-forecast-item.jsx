import React from 'react';

import './weekly-forecast-item.css';

const WeeklyForecastItem = ({ data, units }) => {
  const imgUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  // Get the day of the week from the data
  const day = new Date(data.dt * 1000);
  const dayOfWeek = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(day);

  // Format Data
  const tempHigh = Math.round(data.temp.max);
  const tempLow = Math.round(data.temp.min);

  return (
    <div className="weekly-forecast-item">
      <p className="day-header">{dayOfWeek}</p>
      <img className="weekly-weather-icon" src={imgUrl} alt="icon" />
      <p className="weekly-temperature"><span className="weekly-temp-high">{tempHigh}&#176;</span>/{tempLow}&#176;</p>
      <p className="weekly-humidity">Humidity: {data.humidity}%</p>
    </div>
  )
};

export default WeeklyForecastItem;