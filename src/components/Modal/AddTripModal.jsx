import React, { useState } from 'react';

const AddTripModal = ({ addTrip }) => {
  const [city, setCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleAddTrip = () => {
    // Викликати функцію addTrip зі значеннями city, startDate та endDate
    addTrip(prevTrips => [...prevTrips, { city, startDate, endDate }]);
  };

  return (
    <div>
      <h2>Add Trip</h2>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="City"
      />
      <input
        type="text"
        value={startDate}
        onChange={e => setStartDate(e.target.value)}
        placeholder="Start Date"
      />
      <input
        type="text"
        value={endDate}
        onChange={e => setEndDate(e.target.value)}
        placeholder="End Date"
      />
      <button onClick={handleAddTrip}>Add Trip</button>
    </div>
  );
};

export default AddTripModal;
