import React, { useState } from 'react';
import axios from 'axios';
import logo from '../images/logo.png';
import '../styles/signup.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nick, setNick] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const [pwType, setPwType] = useState({
    type: 'password',
    visible: false,
  });

  const handlePasswordType = (e) => {
    setPwType(() => {
      if (!pwType.visible) {
        return { type: 'text', visible: true };
      }
      return { type: 'password', visible: false };
    });
  };

  const [errors, setErrors] = useState({
    emailError: false,
    nickError: false,
    passwordError: false,
    passwordCheckError: false,
  });

  const emailHandler = (e) => {
    if (!email.match('@') && !email.match('.')) {
      setErrors({
        emailError: true,
      });
    } else if (email.match('@') && email.match('.')) {
      setErrors({
        emailError: false,
      });
    }
    setEmail(e.target.value);
  };

  const nickHandler = (e) => {
    if (nick === '') {
      setErrors({
        ...errors,
        nickError: true,
      });
    } else if (nick !== '') {
      setErrors({
        nickError: false,
      });
    }
    setNick(e.target.value);
  };

  const passwordHandler = (e) => {
    console.log("비밀번호", e.target.value)
    if (password === '') {
      setErrors({
        ...errors,
        passwordError: true,
      });
    } else if (password !== '') {
      setErrors({
        passwordError: false,
      });
    }
    setPassword(e.target.value);
  };

  const passwordCheckHandler = (e) => {
    setPasswordCheck(e.target.value)
    if (password === e.target.value) {
      setErrors({
        ...errors,
        passwordCheckError: false,
      });
    } else {
      setErrors({
        passwordCheckError: true,
      })
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="signUp-container">
      <div className="signUp-layout-left">
        <div className='signUp-layout-left2'>
        <img src={logo} alt="logo" className="signUp-logo-img"></img>
        <span className="signUp-logo-text">Code Wave</span>
        </div>
      </div>
      <div className="signUp-layout-right">
        <p className="signUp-text">SIGN UP</p>
        <div className="signUp-logo-mobile">
          <img src={logo} alt="logo" className="signUp-logo-img-mobile"></img>
          <span className="signUp-logo-text-mobile">Code Wave</span>
        </div>
        <div className="inputs">
          <input
            type="email"
            name="email"
            placeholder="이메일"
            className="signUp-mail"
            onChange={emailHandler}
          />
          {errors.emailError && (
            <p style={{ display: 'flex', fontSize: '5px', color: 'red', padding: '10px 90px' }}>
              이메일 형식에 맞게 입력해주세요.
            </p>
          )}
          <input
            type="text"
            name="nick"
            placeholder="닉네임을 입력해주세요."
            className="signUp-nickname"
            onChange={nickHandler}
          />
          {errors.nickError && (
            <p style={{ display: 'flex', fontSize: '5px', color: 'red', padding: '10px 90px' }}>
              닉네임을 입력해주세요.
            </p>
          )}

          <input
            type={pwType.type}
            name="password"
            placeholder="비밀번호를 입력해주세요."
            className="signUp-pw"
            onChange={passwordHandler}
          />
          {errors.passwordError && (
            <p className='check-text'>
              비밀번호를 입력해주세요.
            </p>
          )}

          <input
            type={pwType.type}
            name="passwordCheck"
            placeholder="비밀번호 확인"
            className="signUp-pwChk"
            onChange={passwordCheckHandler}
          />
          {errors.passwordCheckError && (
            <p className='check-text'>
              비밀번호 일치한지 확인해주세요.
            </p>
          )}
        </div>
        <button type="submit" className="signUp-button" onClick={onSubmit}>
          회원가입
        </button>
        <div className="pwVisible">
          <span onClick={handlePasswordType}>
            {pwType.visible ? (
              <span className="pwHide">비밀번호 숨기기</span>
            ) : (
              <span className="pwShow">비밀번호 보이기</span>
            )}
          </span>
        </div>
        <div className='signUp-layout-bottom'>
        <p className="goLogin-text">계정이 있으신가요?</p>
        <span className='goLogin-text-link'>로그인</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
