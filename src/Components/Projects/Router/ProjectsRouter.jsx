import React from "react";
import Home from '../ProjectsHome/ProjectsHome';
import Web from '../ProjectWeb/ApiProjectWeb';
import Game from '../ProjectsGame/ProjectsGame';
import SwipeableRoutes from "react-swipeable-routes";
import { Route } from "react-router-dom";

function ProjectsRouter() {
  return (
      <SwipeableRoutes>
        <Route path="/Projets?step=1" component={Home} />
        <Route path="/Projets?step=2" component={Web} />
        <Route path="/Projets?step=3" component={Game} />
      </SwipeableRoutes>
  );
}

export default ProjectsRouter;