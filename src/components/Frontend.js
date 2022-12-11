import React from 'react';
import '../styles/frontend.css';
import { Link } from 'react-router-dom';
import { Html, Css, Js, Ts, ReactImg, Vue } from '../pages/img';

const Frontend = () => {
  return (
    <div className="frontend-container">
      <div className="frontend-category-layout">
        <div className="frontend-category-to-top">
          <Link to="/category_write/html">
            <div className="frontend-category-item">
              <img className="html-img" src={Html} alt="html" />
            </div>
          </Link>

          <Link to="/category_write/css">
            <div className="frontend-category-item">
              <img className="css-img" src={Css} alt="css" />
            </div>
          </Link>

          <Link to="/category_write/js">
            <div className="frontend-category-item">
              <img className="js-img" src={Js} alt="js" />
            </div>
          </Link>

          <Link to="/category_write/ts">
            <div className="frontend-category-item">
              <img className="ts-img" src={Ts} alt="ts" />
            </div>
          </Link>
        </div>

        <div className="frontend-category-to-middle">
          <Link to="/category_write/react">
            <div className="frontend-category-item">
              <img className="react-img" src={ReactImg} alt="react" />
            </div>
          </Link>

          <Link to="/category_write/vue">
            <div className="frontend-category-item">
              <img className="vue-img" src={Vue} alt="vue" />
            </div>
          </Link>

          <div className="frontend-category-item">
            <p className="addToCategoryItem">+</p>
          </div>

          <div className="frontend-category-item">
            <p className="addToCategoryItem">+</p>
          </div>
        </div>

        <div className="frontend-category-to-bottom">
          <div className="frontend-category-item-">
            <p className="addToCategoryItem">+</p>
          </div>

          <div className="frontend-category-item-">
            <p className="addToCategoryItem">+</p>
          </div>
          
          <div className="frontend-category-item">
            <p className="addToCategoryItem">+</p>
          </div>
          
          <div className="frontend-category-item">
            <p className="addToCategoryItem">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
