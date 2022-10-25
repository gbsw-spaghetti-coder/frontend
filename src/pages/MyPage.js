import React from 'react';
import '../styles/myPage.css';
import Header from '../components/Header';
import Profile from '../images/profile.png';

const MyPage = () => {
  const RedColorChange = () => {
    let layout = document.querySelector('.myPage-layout-top');
    layout.style.transition = '0.5s';
    layout.style.backgroundColor = '#FFA184';
  };

  const GreenColorChange = () => {
    let layout = document.querySelector('.myPage-layout-top');
    layout.style.transition = '0.5s';
    layout.style.backgroundColor = '#00C896';
  };

  const BlueColorChange = () => {
    let layout = document.querySelector('.myPage-layout-top');
    layout.style.transition = '0.5s';
    layout.style.backgroundColor = '#8685EF';
  };

  const GrayColorChange = () => {
    let layout = document.querySelector('.myPage-layout-top');
    layout.style.transition = '0.5s';
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
        <div className="profile-button-div">
          <input type="submit" name="add-button" className="profile-button" value="프로필편집" />
        </div>
      </div>
      <div className="myPage-layout-bottom">
        <img src={Profile} className="profile-img" alt="프로필" />
        <div className="profileAndIntroduce">
          <h2 className="profile-name">민규민규민규민규</h2>
          <span className="introduce-text">자기소개: 시발 존나 하기싫다</span>
        </div>
        <div className="Progress-container">
          <div>
            <span className='progress-text'>CSS</span>
            <progress value="10" max="100" className='progress-bar' />
            <span className='progress-text'>JavaScript</span>
            <progress value="10" max="100" className='progress-bar' />
            <span className='progress-text'>CSS</span>
            <progress value="10" max="100" className='progress-bar' />
            <span className='progress-text'>JavaScript</span>
            <progress value="10" max="100" className='progress-bar' />
            <span className='progress-text'>CSS</span>
            <progress value="10" max="100" className='progress-bar' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
