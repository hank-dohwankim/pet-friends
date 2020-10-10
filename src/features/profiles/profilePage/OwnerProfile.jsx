import React, { useState, useEffect } from "react";
import {Row, Col, Image, Card, Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileIcon from "./ProfileIcon";

export default function OwnerProfile() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    function loadData() {}

    return function cleanup() {};
  });

  return (
    <div>
      <div id="account-info">
        <Row>
          <Image
            src="https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png"
            alt="User Profile"
            className="w-25 p-3 rounded"
          />
          <Col>
            <h1>Username: {}</h1>
            <p>Location: {}</p>
            <p>Pets: {}</p>
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
              <Card.Title>
                St. Vital Park
              </Card.Title>
              <Card.Text>
                My personal favourite route in the city of Winnipeg.
              </Card.Text>
              <Button variant="primary">
                Let's join
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </div>
    </div>
  );
}
