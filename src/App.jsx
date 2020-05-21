import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ApiProject from './Components/ApiProject';
import MonCV from './Components/MonCV';
import Contact from './Components/Contact';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
        </div>
        <Switch>
        <Route path="/Contact">
            <Contact/>
          </Route>
          <Route path="/Projets">
            <ApiProject/>
          </Route>
          <Route path="/Curriculum_Vitae">
            <MonCV/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
