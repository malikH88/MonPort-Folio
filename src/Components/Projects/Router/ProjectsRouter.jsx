import React from 'react';
import Home from '../ProjectsHome/ProjectsHome';
import Web from '../ProjectWeb/ApiProjectWeb';
import Game from '../ProjectsGame/ProjectsGame';
import { useLocation } from 'react-router-dom';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function ProjectsRouter() {
  let query = useQuery();
  let step = parseInt(query.get("step"));
  if (isNaN(step)) {
    step = 1;
  }

  switch (step) {
    case 1:
      return (
        <Home />
      );
    case 2:
      return (
        <Web />
      );
    case 3:
      return (
        <Game />
      );
    default:
      return (
        <div><h1>problem</h1></div>
      );
  }
}

export default ProjectsRouter;