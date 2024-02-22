import React from 'react';

const TripForecast = ({ forecast }) => {
  return (
    <div>
      <h2>Trip Forecast</h2>
      <ul>
        {forecast.map((day, index) => (
          <li key={index}>
            {day.date} - High: {day.highTemp}, Low: {day.lowTemp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripForecast;
