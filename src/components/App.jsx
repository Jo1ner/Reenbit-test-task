import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { Filter } from './Filter/Filter';
import Modal from './Modal/AddTripModal';
import TripsList from './TripsList/TripsList';
import WeatherForecastList from './WeatherForecastList/WeatherForecastList';

export const App = () => {
  const [trips, setTrips] = useState([
    { id: 1, city: 'NewYork', startDate: '2022-11-01', endDate: '2022-11-05' },
  ]);
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [filter, setFilter] = useState('');
  const [showAddTripModal, setShowAddTripModal] = useState(false);

  const createTrip = formData => {
    if (trips.some(trip => trip.name === formData.name)) {
      alert(`${formData.name} is already in trips`);
      return;
    }
    const newTrip = {
      ...formData,
      id: nanoid(),
    };
    console.log(newTrip);
    setTrips([...trips, newTrip]);
    setShowAddTripModal(false);
  };

  const handleInputFilterChange = evt => setFilter(evt.target.value);

  const handleTripSelection = tripId => {
    const trip = trips.find(trip => trip.id === tripId);
    setSelectedTrip(trip);
  };

  const getFindTrip = () => {
    const normalizedFilter = filter.toLowerCase();
    return trips.filter(trip =>
      trip.name.toLowerCase().includes(normalizedFilter)
    );
  };
  useEffect(() => {
    const stringifiedTrips = JSON.stringify(trips);
    localStorage.setItem('trips', stringifiedTrips);
  }, [trips]);

  const findTrips = getFindTrip();
  return (
    <div>
      <h1>Weather Forecast</h1>
      <Filter
        filterValue={filter}
        handleInputFilterChange={handleInputFilterChange}
      />
      <div>
        <TripsList trips={findTrips} />
        <button onClick={() => setShowAddTripModal(true)}>Add trip</button>
      </div>
      <Modal createTrip={createTrip} />
      <h2>Week</h2>
      <WeatherForecastList />
    </div>
  );
};
