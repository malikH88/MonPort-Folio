import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import NavBar from './Components/Navigation/NavBar';
import Home from './Components/HomePages/Home';
import ApiProject from './Components/Projects/ProjectWeb/ApiProjectWeb';
import MonCV from './Components/CurriculumPages/Curriculum';
import Contact from './Components/ContactPages/Contact';
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
