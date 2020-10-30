import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Pet from './../components/Pet';
import { listPetsAction } from '../actions/petActions';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const petList = useSelector((state) => state.petList);
  const { loading, error, pets } = petList;

  useEffect(() => {
    dispatch(listPetsAction());
  }, [dispatch]);

  return (
    <>
      <h1>Pets in my area</h1>
      <Row>
        {pets.map((pet) => (
          <Col key={pet._id}>
            <Pet pet={pet} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
