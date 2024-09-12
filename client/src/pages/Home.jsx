import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardContractor from './DashboardContractor';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Pro-getter</h1>
      <p>Your go-to platform for connecting customers with businesses for tasks and services.</p>
    <Link to="/dashboard">I'm a Cusotmer</Link>
    <br></br>
    <Link to="/DashboardContractor">I'm a Pro</Link>
    
    </div>
  );
};

export default Home;
