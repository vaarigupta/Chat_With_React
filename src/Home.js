import React, { Component } from 'react';
import {Link } from 'react-router-dom';

class Home extends Component {
  
  render() {
        return (
        	<div>
      <h1>Home</h1>
      <br />
      <Link to="/Profile/123"> View Profile </Link>
      <br />
      <Link to="/Chat">Start Chat </Link>
      
      </div>
    );
  }
}

export default Home;
