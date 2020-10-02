import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function OwnerProfile() {
  return (
    <div>
      <div id="account-info">
        <ReactBootstrap.Row>
          <ReactBootstrap.Image
            src="https://www.pinclipart.com/picdir/middle/157-1578186_user-profile-default-image-png-clipart.png"
            alt="User Profile"
            className="w-25 p-3 rounded"
          />
          <ReactBootstrap.Col>
            <h1>Username: </h1>
            <p>Location: </p>
            <p>Pets: </p>
          </ReactBootstrap.Col>
        </ReactBootstrap.Row>
      </div>

      <div id="friends-section">
        <h1>Friends</h1>
        <ReactBootstrap.Row></ReactBootstrap.Row>
      </div>

      <div id="fav-routes-section">
        <h1>Favourite Routes</h1>
        <ReactBootstrap.Row>
          <ReactBootstrap.Card style={{ width: "18rem" }}>
            <ReactBootstrap.Card.Img
              variant="top"
              scr="https://uwaterloo.ca/stratford-school-of-interaction-design-and-business/sites/ca.stratford-school-of-interaction-design-and-business/files/styles/body-500px-wide/public/uploads/images/walking_routes_1_hour_walk.jpg?itok=0zKxfvz8"
            />
            <ReactBootstrap.Card.Body>
              <ReactBootstrap.Card.Title>
                St. Vital Park
              </ReactBootstrap.Card.Title>
              <ReactBootstrap.Card.Text>
                My personal favourite route in the city of Winnipeg.
              </ReactBootstrap.Card.Text>
              <ReactBootstrap.Button variant="primary">
                Let's join
              </ReactBootstrap.Button>
            </ReactBootstrap.Card.Body>
          </ReactBootstrap.Card>
        </ReactBootstrap.Row>
      </div>
    </div>
  );
}
