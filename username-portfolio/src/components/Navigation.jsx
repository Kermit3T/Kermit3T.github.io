import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  margin-top: 1rem;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem;
`;

const NavItem = styled.li`
  a {
    color: #E9EDE4; // Alabaster for link color
    text-decoration: none;
    &:hover {
      color: #E1E5DC; // Chinese White for hover color
    }
  }
`;

function Navigation() {
  return (
    <Nav>
      <NavList>
        <NavItem><Link to="/">Home</Link></NavItem>
        <NavItem><Link to="/about">About Me</Link></NavItem>
        <NavItem><Link to="/projects">Projects</Link></NavItem>
        <NavItem><Link to="/assignments">Assignments</Link></NavItem>
        <NavItem><Link to="/contact">Contact</Link></NavItem>
      </NavList>
    </Nav>
  );
}

export default Navigation;