import React from 'react';
import '../styles/frontend.css';
import { Link } from 'react-router-dom';
import { Html, Css, Js, Ts, ReactImg, Vue } from '../pages/img';

const Frontend = () => {
  return (
    <div className="frontend-container">
      <div className="frontend-category-layout">
        <div className="frontend-category-to-top">
          <div className="frontend-category-item">
            <Link to="/category/html">
              <img className="html-img" src={Html} alt="html" />
            </Link>
          </div>

          <div className="frontend-category-item">
            <Link to="/category/css">
              <img className="css-img" src={Css} alt="css" />
            </Link>
          </div>

          <div className="frontend-category-item">
            <Link to="/category/js">
              <img className="js-img" src={Js} alt="js" />
            </Link>
          </div>

          <div className="frontend-category-item">
            <Link to="/category/ts">
              <img className="ts-img" src={Ts} alt="ts" />
            </Link>
          </div>
        </div>

        <div className="frontend-category-to-middle">
          <div className="frontend-category-item">
            <Link to="/category/react">
              <img className="react-img" src={ReactImg} alt="react" />
            </Link>
          </div>

          <div className="frontend-category-item">
            <Link to="/category/vue">
              <img className="vue-img" src={Vue} alt="vue" />
            </Link>
          </div>

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
