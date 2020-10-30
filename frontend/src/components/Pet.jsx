import React from 'react';
import { Link } from 'react-router-dom';

const Pet = ({ pet }) => {
  return (
    <Link to={`/pet/${pet._id}`}>
      <div>
        <p>{pet.breed}</p>
        <p>{pet.latitude}</p>
        <p>{pet.longitude}</p>
      </div>
    </Link>
  );
};

export default Pet;
