import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import ArticleProjets from './Components/ArticleProjets';
import MonCV from './Components/MonCV';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
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
            <ArticleProjets />
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
