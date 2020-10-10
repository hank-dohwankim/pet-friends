import React from "react";
import {Container, Tabs, Tab} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OwnerProfile from "./OwnerProfile";
import PetProfile from "./PetProfile";
import {createStore} from 'redux';

// const store = createStore()

export default function ProfilePage() {
  return (
    <div>
      <Container>
        <Tabs defaultActiveKey="owner" id="profile-tab">
          <Tab eventKey="owner" title="Owner">
            <OwnerProfile />
          </Tab>
          <Tab eventKey="pets" title="Pets">
            <PetProfile />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}
