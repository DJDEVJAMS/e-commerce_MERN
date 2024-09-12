import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from './Dashboard';
import DashboardContractor from './DashboardContractor';
import '../css/home.css';
const Home = () => {
  return (
    <div >
      <h1 style={{ textAlign:'center'}}>Welcome to Pro-getter</h1>
      <p style={{ textAlign:'center'}}>Your go-to platform for connecting customers with businesses for tasks and services.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
    <Link to="/dashboard">I'm a Customer</Link>
    <br></br>
    <Link to="/DashboardContractor">I'm a Pro</Link>
    </div>
    </div>
  );
};

export default Home;
