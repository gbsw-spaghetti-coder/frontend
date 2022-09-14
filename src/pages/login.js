import React from 'react';
import '../styles/login.css';
import logo from '../images/logo.png';

const login = () => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
    </div>
  );
};

export default login;
