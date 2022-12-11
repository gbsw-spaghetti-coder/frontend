import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/backend.css';
import { C, CS, CPP, Go, Java, PHP, Py, Ruby, Rust, Spring, Ts } from '../pages/img';

const Backend = () => {
  return (
    <div className='backendCategory-container'>
      <div className='backend-category-layout'>
        <div className='backend-category-to-top'>
        <Link to="/category_write/c">
          <div className='backend-category-item'>
            <img className='c-img' src={C} alt='c' />
          </div>
        </Link>

        <Link to="/category_write/c#">
          <div className='backend-category-item'>
            <img className='cs-img' src={CS} alt='cs' />
          </div>
        </Link>

        <Link to="/category_write/c++">
          <div className='backend-category-item'>
            <img className='cpp-img' src={CPP} alt='cpp' />
          </div>
        </Link>
          
        <Link to="/category_write/go">
          <div className='backend-category-item'>
            <img className='go-img' src={Go} alt='go' />
          </div>
        </Link>
        </div>
       
        <div className='backend-category-to-middle'>
        <Link to="/category_write/java">
          <div className='backend-category-item'>
            <img className='java-img' src={Java} alt='java' />
          </div>
        </Link>

        <Link to="/category_write/php">
          <div className='backend-category-item'>
            <img className='php-img' src={PHP} alt='php' />
          </div>
        </Link>
          
        <Link to="/category_write/py">
          <div className='backend-category-item'>
            <img className='py-img' src={Py} alt='py' />
          </div>
        </Link>

        <Link to="/category_write/ruby">
          <div className='backend-category-item'>
            <img className='ruby-img' src={Ruby} alt='ruby' />
          </div>
        </Link>
        </div>
        
        <div className='backend-category-to-bottom'>   
        <Link to="/category_write/rust">
          <div className='backend-category-item'>
            <img className='rust-img' src={Rust} alt='rust' />
          </div>
        </Link>  

        <Link to="/category_write/spring">        
          <div className='backend-category-item'>
            <img className='spring-img' src={Spring} alt='spring' />
          </div>
        </Link>

        <Link to="/category_write/ts">
          <div className='backend-category-item'>
            <img className='ts-img' src={Ts} alt='ts' />
          </div>
        </Link>

          <div>
            <p className='addToCategoryItem'>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
