import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OwnerProfile from "./OwnerProfile";
import PetProfile from "./PetProfile";

export default class ProfilePage extends React.Component {
  constructor() {
    super();
    this.state = {
      // userProfile:
      // petProfile:
    };
  }

  render() {
    return (
      <div>
        <ReactBootstrap.Container>
          <ReactBootstrap.Tabs defaultActiveKey="owner" id="profile-tab">
            <ReactBootstrap.Tab eventKey="owner" title="Owner">
              <OwnerProfile />
            </ReactBootstrap.Tab>
            <ReactBootstrap.Tab eventKey="pets" title="Pets">
              <PetProfile />
            </ReactBootstrap.Tab>
          </ReactBootstrap.Tabs>
        </ReactBootstrap.Container>
      </div>
    );
  }
}
