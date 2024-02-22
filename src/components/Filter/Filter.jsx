import { FilterStyle } from './Filter.styled';
export const Filter = ({ filterValue, handleInputFilterChange }) => {
  return (
    <div>
      <FilterStyle
        type="text"
        value={filterValue}
        onChange={handleInputFilterChange}
        placeholder="Search your trip"
      />
    </div>
  );
};
