// import { TripsListItem } from 'components/TripsListItem/TripsListItem';

// export const TripsList = ({ trips }) => {
//   return (
//     <ul>
//       {trips &&
//         trips.map(trip => {
//           return <TripsListItem key={trip.id} trip={trip} />;
//         })}
//     </ul>
//   );
// };

import React from 'react';

const TripList = ({ trips, selectTrip }) => {
  return (
    <div>
      <h2>Trip List</h2>
      <ul>
        {trips.map((trip, index) => (
          <li key={index} onClick={() => selectTrip(trip)}>
            {trip.city} - {trip.startDate} to {trip.endDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TripList;
