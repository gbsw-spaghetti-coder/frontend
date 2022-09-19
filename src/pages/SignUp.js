import React from "react";
import classNames from "classnames/bind";
import style from '../styles/signup.module.css';
import { Link } from 'react-router-dom';

const cs = classNames.bind(style)

const SignUp = () => {
    return (
        <div className={cs('signup-container')}></div>
    )
}

export default SignUp