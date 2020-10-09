import React from 'react';
import NavigationBar from '../src/components/NavigationBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { HomeScreen } from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Container>
        <div className="App">
          <NavigationBar />
          <HomeScreen />
        </div>
      </Container>
    </Router>
  );
};

export default App;
