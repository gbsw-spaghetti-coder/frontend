import React from 'react';
import Header from '../components/Header';
import '../styles/Main.css';

const Main = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <div id="main-container_center-div">
          <img src='./images/logo.png' id='main-img' />
          <p id="main-text">Code Wave</p>
          <button id="question-button">질문하기</button>
        </div>
      </div>
    </>
  );
};

export default Main;
