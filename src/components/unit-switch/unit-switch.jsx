import React from 'react';

import './unit-switch.css';

const UnitSwitch = ({ units, onChangeUnits }) => (
  <div className="unit-switch">
    <div 
      className={`toggle ${units === 'imperial' ? 'selected' : ''}`}
      onClick={() => onChangeUnits('imperial')}>
      &deg;F
    </div>
    <div 
      className={`toggle ${units === 'metric' ? 'selected' : ''}`}
      onClick={() => onChangeUnits('metric')}>
      &deg;C
    </div>
  </div>
);

export default UnitSwitch;