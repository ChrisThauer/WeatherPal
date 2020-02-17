import React from 'react';

import Wrapper from './components/wrapper/wrapper';

import './App.css';

const API_KEY = '15da7a0e034c3b70a9ee8b3924f68fbf';

class App extends React.Component {
  state = {
    weatherData: null
  };

  componentDidMount() {
    this.getWeatherData();
    console.log(this.state)
  }

  getWeatherData = async () => {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=richmond&appid=${API_KEY}&units=imperial`, {mode: 'cors'});
    response.json().then(res => {
      console.log(res);
      this.setState({weatherData: res});
    }).catch(err => {
      console.log(err);
    })
  };

  render() {
    return (
      <div className="App">
        <Wrapper data={this.state.weatherData} />
      </div>
    );
  }
}

export default App;
