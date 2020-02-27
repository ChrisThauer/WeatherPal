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

  // When the form submits, the current weather data for submitted city will be retrieved
  onFormSubmit = event => {
    event.preventDefault();
    if (this.state.city !== '') {
      this.props.onChangeCity(this.state.city);
      this.setState({ city: '' });
    }
  }

  render() {
    return (
      <div className="header-bar">
        <h1 className="logo">WeatherPal</h1>
        <form className="search-bar" onSubmit={this.onFormSubmit}>
          <input className="search-input" placeholder="Search city" onChange={this.onChange} value={this.state.city} />
          <button className="search-btn" type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
    )    
  }
}

export default HeaderBar;