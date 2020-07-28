import React, { Component } from "react";

import SwipeableRoutes from "react-swipeable-routes";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from '../ProjectsHome/ProjectsHome';
import Web from '../ProjectWeb/ApiProjectWeb';
import Game from '../ProjectsGame/ProjectsGame';
import Pagination from './Pagination';

import './ProjectRoute.css';

class SwipableProject extends Component {
  render() {
    return (
      <Router>
        <SwipeableRoutes>
          <Route path="/project/home" component={Home} />
          <Route path="/project/web" component={Web} />
          <Route path="/project/game" component={Game} />
        </SwipeableRoutes>
        <Pagination />
      </Router>
    );
  }
}

export default SwipableProject;