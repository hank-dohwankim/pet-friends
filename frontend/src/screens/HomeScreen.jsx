import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { petList } from './../actions/petActions';
import { Row, Col } from 'react-bootstrap';
import pets from '../data/pets';

export const HomeScreen = () => {
  // const dispatch = useDispatch();

  // const petContainer = useSelector((state) => state.petList);
  // const { pets, error } = petContainer;

  // useEffect(() => dispatch(petList()), [dispatch]);

  return (
    <>
      <h1>Pets in my area</h1>
      <Row>
        {pets.map((pet) => (
          <Col>
            <p>{pet.breed}</p>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
