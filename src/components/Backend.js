import React from 'react';
import '../styles/backend.css';
import { C, CS, CPP, Go, Java, PHP, Py, Ruby, Rust, Spring, Ts } from '../pages/img';

const Backend = () => {
  return (
    <div className='backendCategory-container'>
      <div className='backend-category-layout'>
        <div className='backend-category-to-top'>
          <div className='backend-category-item'>
            <img className='c-img' src={C} alt='c' />
          </div>
          <div className='backend-category-item'>
            <img className='cs-img' src={CS} alt='cs' />
          </div>
          <div className='backend-category-item'>
            <img className='cpp-img' src={CPP} alt='cpp' />
          </div>
          <div className='backend-category-item'>
            <img className='go-img' src={Go} alt='go' />
          </div>
        </div>
        <div className='backend-category-to-middle'>
          <div className='backend-category-item'>
            <img className='java-img' src={Java} alt='java' />
          </div>
          <div className='backend-category-item'>
            <img className='php-img' src={PHP} alt='php' />
          </div>
          <div className='backend-category-item'>
            <img className='py-img' src={Py} alt='py' />
          </div>
          <div className='backend-category-item'>
            <img className='ruby-img' src={Ruby} alt='ruby' />
          </div>
        </div>
        <div className='backend-category-to-bottom'>
          <div className='backend-category-item'>
            <img className='rust-img' src={Rust} alt='rust' />
          </div>
          <div className='backend-category-item'>
            <img className='spring-img' src={Spring} alt='spring' />
          </div>
          <div className='backend-category-item'>
            <img className='ts-img' src={Ts} alt='ts' />
          </div>
          <div>
            <p className='addToCategoryItem'>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
