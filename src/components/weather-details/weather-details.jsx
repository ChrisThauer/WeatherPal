import React from 'react';

import './weather-details.css';

const WeatherDetails = ({ data, units }) => {
  const { name, main, weather, wind } = data;
  const currentTemp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const imgUrl = `http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;
  const humidity = main.humidity;
  const windSpeed = Math.round(wind.speed);
  const windDeg= wind.deg;
  let windDirection = '';

  // Set units
  const tempUnits = units === 'imperial' ? 'F' : 'C';
  const windUnits = units === 'imperial' ? 'mph' : 'm/s';

  // Determine the direction the wind is blowing by using windDeg
  if (windDeg > 348.75 || windDeg < 11.25) {
    windDirection = 'N';
  } else if (windDeg <= 33.75) {
    windDirection = 'NNE';
  }else if (windDeg <= 56.25) {
    windDirection = 'NE';
  }else if (windDeg <= 78.75) {
    windDirection = 'ENE';
  }else if (windDeg <= 101.25) {
    windDirection = 'E';
  }else if (windDeg <= 123.75) {
    windDirection = 'ESE';
  }else if (windDeg <= 146.25) {
    windDirection = 'SE';
  }else if (windDeg <= 168.75) {
    windDirection = 'SSE';
  }else if (windDeg <= 191.25) {
    windDirection = 'S';
  }else if (windDeg <= 213.75) {
    windDirection = 'SSW';
  }else if (windDeg <= 236.25) {
    windDirection = 'SW';
  }else if (windDeg <= 258.75) {
    windDirection = 'WSW';
  }else if (windDeg <= 281.25) {
    windDirection = 'W';
  }else if (windDeg <= 303.75) {
    windDirection = 'WNW';
  }else if (windDeg <= 236.25) {
    windDirection = 'NW';
  } else {
    windDirection = 'NNW';
  }


  return (
    <div className="weather-details">
      <h1 className="city-name">{name}</h1>
      <div className="main-details">
        <img className="weather-icon" src={imgUrl} alt="icon" />
        <div className="details-block">
          <p className="condition">{weather[0].main}</p>
          <p className="temp-current">{currentTemp} &#176;{tempUnits}</p>
          <p className="temp-feels">Feels like {feelsLike} &#176;{tempUnits}</p>
          <p className="humidity">Humidity: {humidity}%</p>
          <p className="wind">Wind: {windDirection} {windSpeed} {windUnits}</p>
        </div>
      </div>
    </div>
  )
};

export default WeatherDetails;