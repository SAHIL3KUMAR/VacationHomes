import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: #0056b3; /* Darker blue for better contrast */
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  position: sticky; /* Sticks to the top */
  top: 0;
  z-index: 1000; /* Ensures it stays above other content */
`;

const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 8px 12px;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Light hover effect */
  }
`;

const Username = styled.span`
  margin-left: 10px;
  font-weight: bold; /* Make username bold */
`;

const Navbar = ({ username }) => {
  return (
    <NavbarContainer>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        <h1 style={{ margin: 0 }}>MyApp</h1>
      </Link>
      <NavLinks>
        <NavLink to="/">Home</NavLink>
        {username ? ( 
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <Username>Hello, {username}!</Username>
          </>
        ) : ( 
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;
