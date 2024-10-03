import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { jwtDecode } from 'jwt-decode'; 
import { sampleProperties } from '../dummyData'; 

const DashboardContainer = styled.div`
  padding: 50px;
  background-color: #f9f9f9;
`;

const PropertyCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
`;

const PropertyTitle = styled.h3`
  font-size: 22px;
  margin: 10px 0;
`;

const PropertyDescription = styled.p`
  font-size: 16px;
  color: #666;
`;

const Dashboard = () => {
  const [userInfo, setUserInfo] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    const fetchUserDataAndRecommendations = async () => {
      try {
        const token = localStorage.getItem('token');

        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId; 

        const headers = { Authorization: `Bearer ${token}` };

        const userResponse = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/users/me`, { headers });
        setUserInfo(userResponse.data);

        const userLastLocation = 'Los Angeles, CA'; 

        const recommendedProperties = sampleProperties.filter(
          (property) => property.location === userLastLocation
        );

        setRecommendations(recommendedProperties);
      } catch (error) {
        console.error('Error fetching user data or recommendations', error);
      }
    };

    fetchUserDataAndRecommendations();
  }, []);

  return (
    <DashboardContainer>
      <h2>Welcome, {userInfo.username}</h2>
      <p>Email: {userInfo.email}</p>

      <h3>Recommended Properties for You</h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {recommendations.length > 0 ? (
          recommendations.map((property) => (
            <PropertyCard key={property.id}>
              <PropertyImage src={property.imageUrl} alt={property.title} />
              <PropertyTitle>{property.title}</PropertyTitle>
              <PropertyDescription>{property.description}</PropertyDescription>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Price:</strong> ${property.price}</p>
            </PropertyCard>
          ))
        ) : (
          <p>No recommendations available at the moment.</p>
        )}
      </div>
    </DashboardContainer>
  );
};

export default Dashboard;
