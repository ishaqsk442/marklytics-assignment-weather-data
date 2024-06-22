import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  text-align: center;
  margin: 1rem 0;
`;

const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

const Dropdown = ({ setCity }) => (
  <DropdownContainer>
    <select onChange={(e) => setCity(e.target.value)}>
      {cities.map(city => (
        <option key={city} value={city}>{city}</option>
      ))}
    </select>
  </DropdownContainer>
);

export default Dropdown;
