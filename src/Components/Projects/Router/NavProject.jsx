import React from 'react';
import { Link } from 'react-router-dom';
import ProjectRoute from '../Router/ProjectsRouter';
import './Router.css';

const NavProject = () => {
  return (
    <div className='Full_Page_Project'>
      <div>
        <ProjectRoute />
      </div>
      <div className='Button_Nav_Projects'>
        <Link to="/Projets?step=1">
          <button type="button" className="button"></button>
        </Link>
        <Link to="/Projets?step=2">
          <button type="button" className="button"></button>
        </Link>
        <Link to="/Projets?step=3">
          <button type="button" className="button"></button>
        </Link>
      </div>
    </div>
  );
}

export default NavProject;