import React from 'react';
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import { sampleProperties } from '../dummyData';

const PropertiesContainer = styled.div`
  padding: 50px;
  background-color: #f2f2f2;
`;

const PropertyCard = styled.div`
  border: 1px solid #ddd;
  padding: 20px;
  width: 300px;
  margin-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;

  &:hover {
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    transform: translateY(-3px); /* Slight lift effect */
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

const PropertyList = () => {
  return (
    <PropertiesContainer>
      <h2>Available Properties</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {sampleProperties.map((property) => (
          <Link to={`/properties/${property.id}`} key={property.id} style={{ textDecoration: 'none' }}>
            <PropertyCard>
              <PropertyImage src={property.imageUrl} alt={property.title} />
              <PropertyTitle>{property.title}</PropertyTitle>
              <PropertyDescription>{property.description}</PropertyDescription>
              <p><strong>Location:</strong> {property.location}</p>
              <p><strong>Price:</strong> ${property.price}</p>
            </PropertyCard>
          </Link>
        ))}
      </div>
    </PropertiesContainer>
  );
};

export default PropertyList;