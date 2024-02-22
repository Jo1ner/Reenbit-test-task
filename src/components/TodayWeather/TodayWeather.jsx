import React from 'react';

const TodayWeather = ({ weather }) => {
  return (
    <div>
      <h2>Today's Weather</h2>
      <p>
        {weather.city} - {weather.temperature} °C, {weather.description}
      </p>
    </div>
  );
};

export default TodayWeather;
