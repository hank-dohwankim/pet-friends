import React from 'react';
import NavigationBar from './features/nav/NavigationBar';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginForm from './features/auth/LoginForm';
import Footer from './components/Footer';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <main>
        <Router>
          <Container>
            <Switch>
              <Route exact path="/login">
                <LoginForm />
              </Route>
            </Switch>
          </Container>
        </Router>
      </main>
      <Footer />
    </div>
  );
}

export default App;
