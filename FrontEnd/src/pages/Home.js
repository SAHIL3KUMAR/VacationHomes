import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  background: url('https://images.unsplash.com/photo-1595292257484-06e43a3f4d25') center/cover no-repeat;
`;

const HomeTitle = styled.h1`
  font-size: 48px;
  color: #fff;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  margin-top: 20px;
  padding: 15px 30px;
  background-color: #007BFF;
  color: #fff;
  text-decoration: none;
  border-radius: 8px;
  font-size: 18px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Welcome to Vacation Rentals</HomeTitle>
      <p style={{ color: '#fff', fontSize: '24px' }}>Find the best vacation homes and rental properties.</p>
      <HomeButton to="/properties">View Properties</HomeButton>
    </HomeContainer>
  );
};

export default Home;