import React from 'react';
import '../styles/frontend.css';
import { Html, Css, Js, Ts, ReactImg, Vue} from "../pages/img";


const Frontend = () => {
  return (
    <div className="frontend-container">
      <div className="frontend-category-layout">
        <div className="frontend-category-to-top">
          <div className="frontend-category-item">
            <img className="html-img" src={Html} alt="html" />
          </div>
          <div className="frontend-category-item">
            <img className="css-img" src={Css} alt="css" />
          </div>
          <div className="frontend-category-item">
            <img className="js-img" src={Js} alt="js" />
          </div>
          <div className="frontend-category-item">
            <img className="ts-img" src={Ts} alt="ts" />
          </div>
          
        </div>
        <div className="frontend-category-to-middle">
          <div className="frontend-category-item">
            <img className="react-img" src={ReactImg} alt="react"/>
          </div>
          <div className="frontend-category-item">
            <img className="vue-img" src={Vue} alt="vue" />
          </div>
          <div className="frontend-category-item">
            <p className='addToCategoryItem'>+</p>
          </div>
          <div className="frontend-category-item">
            <p className='addToCategoryItem'>+</p>
          </div>
        </div>
        <div className="frontend-category-to-bottom">
          <div className="frontend-category-item-">
            <p className='addToCategoryItem'>+</p>
          </div>
          <div className="frontend-category-item-">
            <p className='addToCategoryItem'>+</p>
          </div>
          <div className="frontend-category-item">
            <p className='addToCategoryItem'>+</p>
          </div>
          <div className="frontend-category-item">
            <p className='addToCategoryItem'>+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
