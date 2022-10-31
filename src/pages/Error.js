import React from 'react';
import '../styles/error.css';

const Error = () => {
  const redirectMainPage = () => {
    window.location.href = '/';
  };
  return (
    <div className="error-container">
      <h1 className="error-text">404 Not Found</h1>
      <div className="error-button-layout">
        <button onClick={redirectMainPage} className="error-button">
          메인으로 돌아가기
        </button>
      </div>
    </div>
  );
};

export default Error;
