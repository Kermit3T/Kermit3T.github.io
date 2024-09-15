import React from 'react';
import styled from 'styled-components';
import Navigation from './Navigation';

const HeaderWrapper = styled.header`
  background-color: #013222; // Dark Green for header background
  color: #F6F7F2; // Cultured for text color
  padding: 1rem 2rem;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2rem;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Title>Tat Thang Tong</Title>
      <Navigation />
    </HeaderWrapper>
  );
}

export default Header;
