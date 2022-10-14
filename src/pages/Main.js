import React from 'react';
import Header from '../components/Header';
import '../styles/Main.css';

const Main = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <div id="main-container_center-div">
          <p id="main-text">Code Wave</p>
          <button id="question-button">질문하기</button>
        </div>
      </div>
    </>
  );
};

export default Main;
