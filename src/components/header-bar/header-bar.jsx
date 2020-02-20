import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import './header-bar.css';

class HeaderBar extends React.Component {
  state = {
    city: ''
  }

  onChange = event => {
    this.setState({ city: event.target.value})
  }

  onGetCityData = () => {
    this.props.getCityData(this.state.city);
    this.setState({ city: '' });
  }

  render() {
    return (
      <div className="header-bar">
        <h1 className="logo">WeatherPal</h1>
        <div className="search-bar">
          <input className="search-input" placeholder="Search city" onChange={this.onChange} value={this.state.city} />
          <div className="search-btn" onClick={this.onGetCityData} >
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>
      </div>
    )    
  }
}

export default HeaderBar;