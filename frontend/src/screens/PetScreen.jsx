import React from 'react';
import pets from '../data/pets';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';

export const PetScreen = ({ match }) => {
  const pet = pets.find((p) => p._id === match.params.id);

  return (
    <>
      <Link className="btn btn-dark my-3" to="/">
        Go back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={pet.image} alt={pet.name} fluid />
        </Col>
        <Col md={5}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>{pet.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <strong>Breed </strong>
                </Col>
                <Col>{pet.breed}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col>
                  <strong>Sex </strong>
                </Col>
                <Col>{pet.sex}</Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Introduce </strong>
              <br />
              {pet.introduce}
            </ListGroup.Item>
            <ListGroup.Item>
              <Button className="btn-block btn-dark" type="button">
                Send friend request
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};
