import React, { useState } from 'react';
import '../styles/myPage.css';
import Header from '../components/Header';
import Profile from '../images/profile.png';

const MyPage = () => {

  const RedColorChange = () => {
    let layout = document.querySelector('.myPage-layout-top');
    layout.style.transition = "1.5s";
    layout.style.backgroundColor = '#FFA184';
  };

  const GreenColorChange = () => {
    let layout = document.querySelector('.myPage-layout-top');
    layout.style.backgroundColor = '#00C896';
  };

  const BlueColorChange = () => {
    let layout = document.querySelector('.myPage-layout-top');
    layout.style.backgroundColor = '#8685EF';
  };

  const GrayColorChange = () => {
    let layout = document.querySelector('.myPage-layout-top');
    layout.style.backgroundColor = '#F5F5F5';
  };


  return (
    <div className="myPage-container">
      <Header />
      <div className="myPage-layout-top">
        <div className="color-div">
          <div className="red-color" onClick={RedColorChange}></div>
          <div className="green-color" onClick={GreenColorChange}></div>
          <div className="blue-color" onClick={BlueColorChange}></div>
          <div className="gray-color" onClick={GrayColorChange}></div>
        </div>
      </div>
      <div className="myPage-layout-bottom">
        <div style={{ display: 'flex' }}>
        <img src={Profile} className="profile-img" alt="프로필" />
        <h2 className="profile-name">민규민규민규민규</h2>
        <button type='submit' name='add-button' className='profile-button'>편집하기</button>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
