import React, { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/category.css';
import classNames from 'classnames/bind';
import Frontend from '../components/Frontend';

const cs = classNames.bind(styles)

const Category = () => {



    const [buttonState, setButtonState] = useState(null);
    const [isButtonClicked, setIsButtonClicked] = useState(false);

  return (
    <div className="category-container">
      <Header />
      <div className="category-button-div">
        <button
          type="submit"
          name="category-button-front"
          className= {cs(
          buttonState === 0 ? "btn-active" : "btn-not-active", 'frontend-btn', 
          isButtonClicked === false && 'not-clicked', )}  
          onClick={() => {setButtonState(0); setIsButtonClicked(true); }}
        >{buttonState === 1 || buttonState === 2 ? 'F' : '프론트엔드' }</button>
        
        <button
          type="submit"
          name="category-button-back"
          className= {cs(buttonState === 1 ? "btn-active" : "btn-not-active", 'backend-btn', isButtonClicked === false && 'not-clicked')}
          onClick={() =>{setButtonState(1); setIsButtonClicked(true)}}>
          {buttonState === 0 || buttonState === 2 ? 'B' : '백엔드'}</button>

        <button
          type="submit"
          name="category-button-etc"
          className= {cs(buttonState === 2 ? "btn-active" : "btn-not-active", 'etc-btn', isButtonClicked === false && 'not-clicked')}
          onClick={() => {setButtonState(2); setIsButtonClicked(true)}}
        >{buttonState === 0 || buttonState === 1 ? 'E' : '기타'} </button>
      </div>
      <div className='category'>
        <Frontend />
      </div>
    </div>
  );
};

export default Category;
