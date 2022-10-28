import React, { useState } from 'react';
import Header from '../components/Header';
import styles from '../styles/category.css';
import classNames from 'classnames/bind';

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
        >{buttonState === 1 || buttonState === 2 || buttonState === 3 ? 'F' : 'Frontend' }</button>
        
        <button
          type="submit"
          name="category-button-back"
          className= {cs(buttonState === 1 ? "btn-active" : "btn-not-active", 'backend-btn', isButtonClicked === false && 'not-clicked')}
          onClick={() =>{setButtonState(1); setIsButtonClicked(true)}}>
          {buttonState === 0 || buttonState === 2 || buttonState === 3 ? 'B' : 'Backend'}</button>

        <button
          type="submit"
          name="category-button-DBAndServer"
          className= {cs(buttonState === 2 ? "btn-active" : "btn-not-active", 'dbAndServerBtn', isButtonClicked === false && 'not-clicked')}
          onClick={() => {setButtonState(2); setIsButtonClicked(true)}}
        >{buttonState === 0 || buttonState === 1 || buttonState === 3 ? 'D' : 'DB/Server'}</button>

        <button
          type="submit"
          name="category-button-etc"
          className= {cs(buttonState === 3 ? "btn-active" : "btn-not-active", 'etc-btn', isButtonClicked === false && 'not-clicked')}
          onClick={() => {setButtonState(3); setIsButtonClicked(true)}}
        >{buttonState === 0 || buttonState === 1 || buttonState === 2 ? 'E' : '기타'} </button>

      </div>
      <div className='category'></div>
    </div>
  );
};

export default Category;
