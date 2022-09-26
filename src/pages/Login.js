import React, { useState } from 'react';
import axios from 'axios';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import style from '../styles/login.module.css';
import Kakao from '../images/kakao.png';
import Github from '../images/git.png';

const cs = classNames.bind(style);

const Login = (props) => {
  const { bg } = props;
  bg('bg-blue');

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
        alert(response.data.message);
        window.location.href = '/';
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      alert(error.response.data.message);
    }
  };

  return (
    <div className={cs('login-container')}>
      <div className={cs('logo-layout')}>
        <img src={logo} className={cs('logo')} alt="logo" />
        <p className={cs('logo-text')}>Code Wave</p>
      </div>
      <div className={cs('login-layout')}>
        <div className={cs('login-layout-top')}>
          <p className={cs('login-text')}>LOGIN</p>
          <img src={logo} className={cs('logo-mobile')} alt="logo " />
          <p className={cs('logo-text-mobile')}>Code Wave</p>
          <form className={cs('login-form')} onSubmit={submit}>
            <div>
              <input
                type="email"
                name="email"
                className={cs('email-text')}
                placeholder="E-mail"
                value={values.email}
                onChange={handleChange}
              />
              <input
                type="password"
                name="password"
                className={cs('pw-text')}
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className={cs('login-button')}>
              로그인
            </button>
            <p className={cs('lostPW')}>비밀번호를 잃어버리셨나요?</p>
            <div className={cs('or-layout')}>
              <p className={cs('left-or-border')} />
              <p className={cs('or')}>OR</p>
              <p className={cs('right-or-border')} />
            </div>
            <div className={cs('kakao-button')}>
              <button type="submit" className={cs('kakao-login-button')}>
                <img src={Kakao} className={cs('kakao-img')} alt="error" />
                <span className={cs('button-phrase')}>카카오로 로그인</span>
              </button>
            </div>
            <div className={cs('github-button')}>
              <button type="submit" className={cs('github-login-button')}>
                <img src={Github} className={cs('github-img')} alt="error" />
                <span className={cs('button-phrase')}>깃허브로 로그인</span>
              </button>
              {/*<a href="http://localhost:3001/api/auth/github">깃허브</a>*/}
            </div>
            <div className={cs('login-layout-bottom-mobile')}>
              <p className={cs('goSignUp-text')}>계정이 없으신가요?</p>
              <span className={cs('goSignUp-text-link')}>회원가입</span>
            </div>
          </form>
        </div>
        <div className={cs('login-layout-bottom')}>
          <p className={cs('goSignUp-text')}>계정이 없으신가요?</p>
          <span className={cs('goSignUp-text-link')}>회원가입</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
