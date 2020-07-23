import React from 'react';
import { Link } from "react-router-dom";
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="Cv_Page">
      <h1>My Dashboard</h1>
      <Link to="/create">Add</Link>
      <Link to="/remove">Remove</Link>
    </div>
  )
}

export default Dashboard;