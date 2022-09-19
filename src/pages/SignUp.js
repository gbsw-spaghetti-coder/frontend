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

            </div>
        </div>
    )
}

export default SignUp