import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Tabs from './Components/Tabs';
import MonCV from './Components/MonCV';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
        </div>
        <Switch>
          <Route path="/Projets">
            <Tabs />
          </Route>
          <Route path="/MonCV">
            <MonCV />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
