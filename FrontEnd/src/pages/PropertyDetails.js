import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { sampleProperties } from '../dummyData'; 

const DetailsContainer = styled.div`
  padding: 50px;
  background-color: #f2f2f2;
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 400px;
  border-radius: 8px;
  object-fit: cover;
`;

const PropertyTitle = styled.h2`
  font-size: 28px;
  margin: 20px 0;
`;

const PropertyDescription = styled.p`
  font-size: 18px;
  color: #666;
`;

const BookButton = styled.button`
  padding: 10px 20px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const PropertyDetails = () => {
  const { id } = useParams(); 
  const property = sampleProperties.find((prop) => prop.id === parseInt(id)); 

  if (!property) {
    return <h2>Property not found!</h2>;
  }

  const handleBook = () => {
    alert(`You have booked the ${property.title} successfully!`); 
  };

  return (
    <DetailsContainer>
      <PropertyImage src={property.imageUrl} alt={property.title} />
      <PropertyTitle>{property.title}</PropertyTitle>
      <PropertyDescription>{property.description}</PropertyDescription>
      <p><strong>Location:</strong> {property.location}</p>
      <p><strong>Price:</strong> ${property.price}</p>
      <BookButton onClick={handleBook}>Book Now</BookButton> {/* Book button */}
    </DetailsContainer>
  );
};

export default PropertyDetails;
