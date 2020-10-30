import React from 'react';
import NavigationBar from './features/nav/NavigationBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './features/auth/LoginForm';
import Footer from './components/Footer';
import styled from 'styled-components';
import { HomeScreen } from './screens/HomeScreen';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Main className="py-3">
        <Router>
          <Container>
            <Switch>
              <Route path="/">
                <HomeScreen />
              </Route>
              <Route exact path="/login">
                <LoginForm />
              </Route>
            </Switch>
          </Container>
        </Router>
      </Main>
      <Footer />
    </div>
  );
}

const Main = styled.div`
  min-height: 90vh;
`;

export default App;
