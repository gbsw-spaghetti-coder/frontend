import React, { useState } from 'react';
import axios from 'axios';
import '../styles/login.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Login = (props) => {
  const { bg } = props;
  bg('bg-blue');

  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const submit = async (e) => {
    e.preventDefault()

    const data = {
      email: values.email,
      password: values.password
    };

    try {
      await axios.post('/api/auth/login', data, { withCredentials: true })
        .then((response) => {
          console.log(response);
          alert(response.data.message);
        }).catch((error) => {
          console.error(error);
        })
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="login-container">
      <div className="logo-layout">
        <img src={logo} className="logo" alt="logo"/>
        <p className="logo-text">Code Wave</p>
      </div>
      <div className="login-layout">
        <div className="login-layout-top">
          <p className="login-text">LOGIN</p>
          <form className='login-form' onSubmit={submit}>
            <input
              type="email"
              name="email"
              className="email-text"
              placeholder='E-mail'
              value={values.email}
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              className="pw-text"
              placeholder='Password'
              value={values.password}
              onChange={handleChange}
            />
            <button type='submit' className='login-button'>로그인</button>
            <p className='lostPW'>비밀번호를 잃어버리셨나요?</p>
          </form>
        </div>
        <div className="login-layout-bottom">
          <p className="goSignUp-text">계정이 없으신가요?</p>
          <span className="goSignUp-text-link">회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
