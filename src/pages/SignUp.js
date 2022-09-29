import React, { useState } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import logo from '../images/logo.png';
import style from '../styles/signup.module.css';
import { Link } from 'react-router-dom';

const cs = classNames.bind(style);

const SignUp = () => {
  const [values, setValues] = useState({
    email: '',
    nick: '',
    password: '',
    passwordCheck: '',
  });
  const [error, setError] = useState("");

  const { email, nick, password, passwordCheck } = values;


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className={cs('signUp-container')}>
      <div className={cs('signUp-layout-left')}>
        <img src={logo} alt="logo" className={cs('signUp-logo-img')}></img>
        <span className={cs('signUp-logo-text')}>Code Wave</span>
      </div>
      <div className={cs('signUp-layout-right')}>
        <p className={cs('signUp-text')}>SIGN UP</p>
        <div className={cs('signUp-logo-mobile')}>
          <img src={logo} alt="logo" className={cs('signUp-logo-img-mobile')}></img>
          <span className={cs('signUp-logo-text-mobile')}>Code Wave</span>
        </div>
        <div className={cs('inputs')}>
          <input
            type="email"
            name="email"
            placeholder="이메일"
            className={cs('signUp-mail')}
            onChange={handleChange}
          />
          <br />
          <input
            type="text"
            name="nick"
            placeholder="닉네임을 입력해주세요."
            className={cs('signUp-nickname')}
            onChange={handleChange}
          />{' '}
          <br />
          <input
            type="password"
            name="password"
            placeholder="비밀번호를 입력해주세요."
            className={cs('signUp-pw')}
            onChange={handleChange}
          />{' '}
          <br />
          <input
            type="password"
            name="passwordCheck"
            placeholder="비밀번호 확인"
            className={cs('signUp-pwChk')}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className={cs('signUp-button')} onClick={onSubmit}>
          회원가입
        </button>
        {/*<button
          type="submit"
          disabled={isDisabled}
          onClick={handleButtonValid}
        >fdfdfdff</button>*/}
        <p className={cs('goLogin-text')}>계정이 있으신가요?</p>
      </div>
    </div>
  );
};

export default SignUp;