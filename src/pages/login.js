import React from "react";
import "../styles/login.css";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const login = (props) => {
  const {bg} = props
  bg('bg-blue')

  return (
    <div className="login-container">
      <div className="logo-layout">
        <img src={logo} className="logo" />
        <p className="logo-text">Code Wave</p>
      </div>
      <div className="login-layout">
        <div className="login-layout-top">
          <p className="login-text">LOGIN</p>
        </div>
        <div className="login-layout-bottom">
          <p className="goSignUp-text" >계정이 없으신가요?</p>  
          <span className="goSignUp-text-link">회원가입</span> 
        </div>  
      </div>      
=======
const login = () => {
  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
>>>>>>> d3049f1967c7c39e1809cd43ed97f89d52c45695
    </div>
  );
};

export default login;
