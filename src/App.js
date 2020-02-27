import React from 'react';

import Wrapper from './components/wrapper/wrapper';

import './App.css';

const API_KEY = '15da7a0e034c3b70a9ee8b3924f68fbf';

class App extends React.Component {
  state = {
    weatherData: null,
    city: 'Richmond',
    cityError: false,
    units: 'imperial'
  }

  componentDidMount() {
    this.getWeatherData();
  }

  getWeatherData = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${API_KEY}&units=${this.state.units}`, {mode: 'cors'});
    response.json().then(res => {
      if (res.cod === '404') {
        this.setState({ cityError: true });
      } else {
        this.setState({ weatherData: res, cityError: false });
      }
    }).catch(err => {
      console.log(err);
    })
  }

  onChangeCity = (city) => {
    this.setState({ city }, () => {
      this.getWeatherData();
    })
  }

  onChangeUnits = (units) => {
    this.setState({ units }, () => {
      this.getWeatherData()
    });
  }

  render() {
    return (
      <div className="App">
        <Wrapper 
          data={this.state.weatherData}
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
