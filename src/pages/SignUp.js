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
    nickname: '',
    password: '',
    passwordCheck: ''
  });

  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
    console.log(values.password);
  }

  const onSubmit = async (e) => {
    e.preventDefault();

    if(values.email === '') {
      alert("이메일을 입력하세요... ㅠㅠ");
    } else if (values.nickname === '') {
      alert("닉네임을입려하세요ㅠㅠ");
    } else if (values.password === '') {
      alert("비밀번호적으세요");
    } else if (values.passwordCheck === '') {
      alert("비밀번호체크르랳주세요")
    }

    if(values.password !== values.passwordCheck) {
      alert("비밀번호가달라요^^");
    }

    const data = {
      email: values.email,
      nick: values.nickname,
      password: values.passwordCheck
    }


    try {
      const response = await axios.post('/api/auth/sign', data, {withCredentials: true})

      if (response.data.success) {
        alert(response.data.message);
        window.location.href = "/";
        console.log(response);
      }
    } catch (error) {
      alert(error.response.data.message);
    }


  }

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
        <p className={cs('goLogin-text')}>계정이 있으신가요?</p>
      </div>
    </div>
  );
};

export default SignUp;
