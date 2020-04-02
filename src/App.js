import React from 'react';

import Wrapper from './components/wrapper/wrapper';

import './App.css';

const API_KEY = process.env.REACT_APP_API_KEY;

class App extends React.Component {
  state = {
    currentWeatherData: null,
    weeklyData: null,
    city: 'Richmond',
    cityError: false,
    units: 'imperial'
  }

  componentDidMount() {
    this.getCurrentWeatherData();
    this.getWeeklyWeatherData();
  }

  getCurrentWeatherData = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}&units=${this.state.units}`, {mode: 'cors'});
    response.json().then(res => {
      if (res.cod === '404') {
        this.setState({ cityError: true });
      } else {
        this.setState({ currentWeatherData: res, cityError: false });
      }
    }).catch(err => {
      console.log(err);
    })
  }

  getWeeklyWeatherData = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&cnt=5&appid=${API_KEY}&units=${this.state.units}`, {mode: 'cors'});
    response.json().then(res => {
      if (res.cod !== '404') {
        this.setState({ weeklyData: res.list, cityError: false });
      }
    }).catch(err => {
      console.log(err);
    })
  }

  onChangeCity = (city) => {
    this.setState({ city }, () => {
      this.getCurrentWeatherData();
      this.getWeeklyWeatherData();
    });
  }

  onChangeUnits = (units) => {
    this.setState({ units }, () => {
      this.getCurrentWeatherData();
      this.getWeeklyWeatherData();
    });
  }

  render() {
    return (
      <div className="App">
        <Wrapper 
          currentWeatherData={this.state.currentWeatherData}
          weeklyData={this.state.weeklyData}
          cityError={this.state.cityError} 
          units={this.state.units}
          onChangeCity={this.onChangeCity}
          onChangeUnits={this.onChangeUnits}
        />
      </div>
    );
  }
}

export default App;
