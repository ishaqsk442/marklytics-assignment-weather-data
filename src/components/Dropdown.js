import React from 'react';
import styled from 'styled-components';

// Container for dropdown
const DropdownContainer = styled.div`
  text-align: center;
  margin: 1rem 0;
`;

// Styled select element
const StyledSelect = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  color: #333;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:focus {
    border-color: #555;
  }
`;

// List of cities
const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

const Dropdown = ({ setCity }) => (
  <DropdownContainer>
    <StyledSelect onChange={(e) => setCity(e.target.value)}>
      {cities.map(city => (
        <option key={city} value={city}>{city}</option>
      ))}
    </StyledSelect>
  </DropdownContainer>
);

export default Dropdown;
