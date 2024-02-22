import { TripsItem } from './TripsListItem.styled';

export const TripsListItem = ({
  trip,
  photo,
  cityname,
  startDate,
  endDate,
}) => {
  return (
    <TripsItem>
      <img alt="">{photo} </img>
      <span>{cityname}</span>
      <span>{startDate}</span>
      <span>{endDate}</span>
    </TripsItem>
  );
};
