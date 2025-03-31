import React, {useState} from 'react';

const App = () => {
  const [celsius,setCelsius] = useState(0);
  const celsiusToFahrenheit = (temp) => {
    return Math.round((temp * 9/5 + 32) * 100) / 100;
  };

  const celsiusToKelvin = (temp) => {
    return Math.round((temp + 273.15) * 100) / 100;
  };

  // Edit this component
  return (
    <div>
      <form>
        <input
          data-testid='input-id'
          name="input"
          type="number"
          value = {celsius}
          onChange = {(e)=>setCelsius(parseFloat(e.target.value))}
        />
        <label for="input">°C</label>
      </form>
      <p data-testid='output'>
         {/* Write the string here */}
         {celsius}°C is {celsiusToFahrenheit(celsius)}°F and {celsiusToKelvin(celsius)}K.
      </p>
    </div>
  );
};

export default App;