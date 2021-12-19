import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Settings from './Settings';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Settings />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
