import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import axios from 'axios';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import Github from '../images/git.png';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  /*const [cookie, setCookie] = useState("");*/

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const submit = async (e) => {
    e.preventDefault();

    const data = {
      email: values.email,
      password: values.password,
    };

    try {
      const response = await axios.post('/api/auth/login', data, { withCredentials: true });
      if (response.data.success) {
        localStorage.clear();
        alert(response.data.message);
        window.location.href = "/";
        localStorage.setItem("token", "token");
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  // try {
  //   if (response.data.success) {
  //       alert(response.data.message);
  //       localStorage.clear();
  //       localStorage.setItem("token", "token");
  //       window.location.href = "/";
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     alert(error.response.data.message);
  //   };

  return (
    <div className="login-container">
      <div className="login-layout-left">
        <div className="login-layout-left2">
          <img src={logo} alt="logo" className="login-logo-img"></img>
          <span className="login-logo-text">Code Wave</span>
        </div>
      </div>
      <div className="login-layout-right">
        <p className="login-text">LOGIN</p>
        <div className="login-logo-mobile">
          <img src={logo} alt="logo" className="login-logo-img-mobile"></img>
          <span className="login-logo-text-mobile">Code Wave</span>
        </div>
        <form className="login-form" onSubmit={submit}>
          <div className="inputs">
            <input
              type="email"
              name="email"
              className="email-text"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="password-text"
              placeholder="Password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="login-button" onClick={submit}>
            로그인
          </button>
          <p className="lostPW">비밀번호를 잃어버리셨나요?</p>
          <div className="or-layout">
            <p className="left-or-border" />
            <p className="or">OR</p>
            <p className="right-or-border" />
          </div>
          <div className="github-button">
            <a href="http://127.0.0.1:3001/api/auth/github" className="github-login-button">
              <img src={Github} className="github-img" alt="error" />
              <span className="button-phrase">깃허브로 로그인</span>
            </a>
          </div>
          <div className="login-layout-bottom">
            <p className="goSignUp-text">계정이 없으신가요?</p>
            <Link to="/signup">
            <span className="goSignUp-text-link">회원가입</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
