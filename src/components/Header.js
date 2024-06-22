import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 1rem;
  background: #282c34;
  color: white;
`;

const Header = ({ title, description }) => (
  <HeaderContainer>
    <h1>{title}</h1>
    <p>{description}</p>
  </HeaderContainer>
);

export default Header;
