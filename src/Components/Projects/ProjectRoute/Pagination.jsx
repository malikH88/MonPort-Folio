import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectRoute.css';

const Pagination = () => {
  return (
    <div className='Pagination'>
      <Link to="/project/home">
        <button type="button" className="button"></button>
      </Link>
      <Link to="/project/web">
        <button type="button" className="button"></button>
      </Link>
      <Link to="/project/game">
        <button type="button" className="button"></button>
      </Link>
    </div>
  );
}

export default Pagination;