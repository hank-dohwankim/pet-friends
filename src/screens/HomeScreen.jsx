import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { petList } from './../actions/petActions';
import { Row } from 'react-bootstrap';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const petContainer = useSelector((state) => state.petList);
  const { pets, error } = petContainer;

  useEffect(() => dispatch(petList()), [dispatch]);

  return (
    <>
      <Row>{pets}</Row>
    </>
  );
};

export default HomeScreen;
