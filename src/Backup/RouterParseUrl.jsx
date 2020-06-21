import React from 'react';
import ProjectRouter from '../Router/ProjectsRouter';
import Home from '../ProjectsHome/ProjectsHome';
import Web from '../ProjectWeb/ApiProjectWeb';
import Game from '../ProjectsGame/ProjectsGame';
import { useLocation } from 'react-router-dom';


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function RouterParseUrl() {
  let query = useQuery();
  let step = parseInt(query.get("step"));
  if (isNaN(step)) {
    step = 1;
  }

  switch (step) {
    case 1:
      return (
        <ProjectRouter component={Home} />
      );
    case 2:
      return (
        <ProjectRouter component={Web} />
      );
    case 3:
      return (
        <ProjectRouter component={Game} />
      );
    default:
      return (
        <div><h1>problem</h1></div>
      );
  }
}

export default RouterParseUrl;