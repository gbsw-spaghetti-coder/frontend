import React from "react";
import classNames from "classnames/bind";
import logo from '../images/logo.png';
import style from '../styles/signup.module.css';
import { Link } from 'react-router-dom';

const cs = classNames.bind(style);

const SignUp = () => {
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
                    <input type='text' placeholder="이메일" className={cs('signUp-mail')} /> <br />
                    <input type='text' placeholder="닉네임을 입력해주세요." className={cs('signUp-nickname')}/> <br />
                    <input type='password' placeholder="비밀번호를 입력해주세요." className={cs('signUp-pw')} /> <br />
                    <input type='password' placeholder="비밀번호 확인" className={cs('signUp-pwChk')} /> 
                </div>
                <button type="submit" className={cs('signUp-button')}>회원가입</button>
                <p className={cs("goLogin-text")}>계정이 있으신가요?</p>
            </div>
        </div>
    )
}

export default SignUp