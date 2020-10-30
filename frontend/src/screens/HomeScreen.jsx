import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Container } from 'react-bootstrap';
import Pet from './../components/Pet';
import Message from '../components/utility/Message';
import Loader from '../components/utility/Loader';
import { listPetsAction } from '../actions/petActions';
import GoogleMapReact from 'google-map-react';
import { GoogleMap } from './../components/GoogleMap';

export const HomeScreen = () => {
  const dispatch = useDispatch();

  const petList = useSelector((state) => state.petList);
  const { loading, error, pets } = petList;

  useEffect(() => {
    dispatch(listPetsAction());
  }, [dispatch]);

  return (
    <>
      <Container>
        <h1>Pets in my area</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            {pets.map((pet) => (
              <Col key={pet._id}>
                <Pet pet={pet} />
              </Col>
            ))}
            <Row>
              <GoogleMap pets={pets} />
            </Row>
          </Row>
        )}
      </Container>
    </>
  );
};

export default HomeScreen;
