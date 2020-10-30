import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Pet = ({ pet }) => {
  return (
    <Link to={`/pet/${pet._id}`}>
      <PetInfo>
        <p>{pet.name}</p>
        <p>{pet.breed}</p>
        <p>{pet.sex}</p>
        <p>{pet.latitude}</p>
        <p>{pet.longitude}</p>
      </PetInfo>
    </Link>
  );
};

const PetInfo = styled.div`
  color: #000;
`;

export default Pet;
