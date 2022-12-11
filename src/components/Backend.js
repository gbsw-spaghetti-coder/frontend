import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/backend.css';
import { C, CS, CPP, Go, Java, PHP, Py, Ruby, Rust, Spring, Ts } from '../pages/img';

const Backend = () => {
  return (
    <div className="backendCategory-container">
      <div className="backend-category-layout">
        <div className="backend-category-to-top">
          <div className="backend-category-item">
            <Link to="/category/c">
              <img className="c-img" src={C} alt="c" />
            </Link>
          </div>

          <div className="backend-category-item">
            <Link to="/category/c#">
              <img className="cs-img" src={CS} alt="cs" />
            </Link>
          </div>

          <div className="backend-category-item">
            <Link to="/category/c#">
              <img className="cpp-img" src={CPP} alt="cpp" />
            </Link>
          </div>

          <div className="backend-category-item">
            <Link to="/category/go">
              <img className="go-img" src={Go} alt="go" />
            </Link>
          </div>
        </div>

        <div className="backend-category-to-middle">
          <div className="backend-category-item">
            <Link to="/category/java">
              <img className="java-img" src={Java} alt="java" />
            </Link>
          </div>

          <div className="backend-category-item">
            <Link to="/category/php">
              <img className="php-img" src={PHP} alt="php" />
            </Link>
          </div>

          <div className="backend-category-item">
            <Link to="/category/py">
              <img className="py-img" src={Py} alt="py" />
            </Link>
          </div>

          <div className="backend-category-item">
            <Link to="/category/ruby">
              <img className="ruby-img" src={Ruby} alt="ruby" />
            </Link>
          </div>
        </div>

        <div className="backend-category-to-bottom">
          <div className="backend-category-item">
            <Link to="/category/rust">
              <img className="rust-img" src={Rust} alt="rust" />
            </Link>
          </div>

          <div className="backend-category-item">
            <Link to="/category/spring">
              <img className="spring-img" src={Spring} alt="spring" />
            </Link>
          </div>

          <div className="backend-category-item">
            <Link to="/category/ts">
              <img className="ts-img" src={Ts} alt="ts" />
            </Link>
          </div>

          <div>
            <p className="addToCategoryItem">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Backend;
