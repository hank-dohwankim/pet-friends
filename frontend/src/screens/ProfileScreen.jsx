import React, { useState, useEffect } from "react";
import { Container, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import Message from "../components/utility/Message";
import Loader from "../components/utility/Loader";
import { OwnerProfile } from "../components/profile/OwnerProfile";
import petProfile from "../components/profile/PetProfile";

export const ProfileScreen = ({ match }) => {
  return (
    <div>
      <Container>
        <h1>Profile</h1>
        <Tabs defaultActiveKey="owner" id="profile-tab">
          <Tab eventKey="owner" title="Owner">
            <OwnerProfile id={match.params.id} />
          </Tab>
          <Tab eventKey="pets" title="Pets">
            <petProfile />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
};

export default ProfileScreen;
