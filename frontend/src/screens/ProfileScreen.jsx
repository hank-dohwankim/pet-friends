import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Button, Row, Col, Container, Tabs, Tab } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from 'react-redux';

import Message from '../components/utility/Message';
import Loader from '../components/utility/Loader';
import OwnerProfile from '../components/profile/OwnerProfile';
import petProfile from '../components/profile/PetProfile';

export const ProfileScreen = () => {
    const [profile, setProfile] = useState('');

    const dispatch = useDispatch();

    const profileLoader = useSelector(state => state.profileLoad);
    const { loading, error, profileInfo } = profileLoader;

    useEffect(() => {

    });

    return (
      <div>
        <Container>
            <h1>Profile</h1>
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Tabs defaultActiveKey="owner" id="profile-tab">
                <Tab eventKey="owner" title="Owner">
                  <OwnerProfile />
                </Tab>
                <Tab eventKey="pets" title="Pets">
                  <petProfile />
                </Tab>
              </Tabs>
            )}
        </Container>
      </div>
    );
};

export default ProfileScreen;