import React from 'react';
import MeetingDashboard from '../../features/meetings/meetingDashboard/MeetingDashboard';
import NavigationBar from "../../features/nav/NavigationBar";
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginForm from "../../features/auth/LoginForm";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Router>
        <Switch>
          <Route exact path="/login">
            <LoginForm />
          </Route>
        </Switch>
      </Router>
      <MeetingDashboard />
    </div>
  );
}

export default App;
