import React from 'react';

import { HomeScreen } from './screens/HomeScreen';
import { PetScreen } from './screens/PetScreen';
import { LoginScreen } from './screens/LoginScreen';

import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Main className="py-3">
        <Container>
          <Switch>
            <Route path="/" component={HomeScreen} exact />
            <Route path="/login" component={LoginScreen} exact />
            <Route path="/pet/:id" component={PetScreen} />
          </Switch>
        </Container>
      </Main>
      <Footer />
    </Router>
  );
}

const Main = styled.main`
  min-height: 90vh;
`;

export default App;
