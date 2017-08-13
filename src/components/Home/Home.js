import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => (
  <div>
    <h1>Hello React!</h1>
    <Link to="/about">Check about routing</Link>
  </div>
);
export default Home;
