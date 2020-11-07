import React, { useState, useEffect } from "react";
import { Row, Col, Image, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileIcon from "./ProfileIcon";
import { useSelector, useDispatch } from "react-redux";

import { profileLoadAction } from "../../actions/profileActions";

export const OwnerProfile = (props) => {
  const dispatch = useDispatch();
  const profileLoader = useSelector((state) => state.profileLoad);
  const { loading, error, profile } = profileLoader;

  useEffect(() => {
    dispatch(profileLoadAction(props.id));
  }, [dispatch, props]);

  return (
    <div>
      <div id="account-info">
        <Row>
          <Col sm={4}>
            <Image
              src="https://media.npr.org/assets/img/2017/06/03/gettyimages-453879976-59801bc8f1f6bda5175c3098bb0d9a28696394be.jpg"
              alt="User Profile"
              className="w-100 p-2 rounded"
            />
          </Col>
          <Col sm={8}>
            <h1>Username: {profile.username}</h1>
            <Row className="pl-3">
              <p>
                <strong>{profile.numFollowers}</strong> followers
              </p>
              <p>
                <strong>{profile.numFollowing}</strong> following
              </p>
            </Row>
            <p>Location: {profile.area}</p>
            <p>Pets: {profile.numPets}</p>
          </Col>
        </Row>
      </div>

      <div id="friends-section">
        <h1>Friends</h1>
        <Row>
          <ProfileIcon />
        </Row>
      </div>

      <div id="fav-routes-section">
        <h1>Favourite Routes</h1>
        <Row>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              scr="https://uwaterloo.ca/stratford-school-of-interaction-design-and-business/sites/ca.stratford-school-of-interaction-design-and-business/files/styles/body-500px-wide/public/uploads/images/walking_routes_1_hour_walk.jpg?itok=0zKxfvz8"
            />
            <Card.Body>
              <Card.Title>St. Vital Park</Card.Title>
              <Card.Text>
                My personal favourite route in the city of Winnipeg.
              </Card.Text>
              <Button variant="primary">Let's join</Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
};
