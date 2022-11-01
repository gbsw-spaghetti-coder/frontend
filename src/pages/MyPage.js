import React, { useState, useEffect } from 'react';
import '../styles/myPage.css';
import Header from '../components/Header';
import Profile from '../images/profile.png';
import axios from 'axios';
import Coin from '../components/Coin';

const MyPage = () => {
  const [nick, setNick] = useState('');
  const [introduce, setIntroduce] = useState('');

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

  // const fetchMydata = async () => {
  //   if(localStorage.getItem("token") === null) {
  //     alert("로그인 하세요")
  //     window.location.href = "/";
  //   } else {
  //     await axios.get('/api/user', {withCredentials: true})
  //       .then((res) => {
  //         setNick(res.data.nick);
  //         setIntroduce(res.data.introduce);
  //       }).catch((error) => {
  //         console.log(error);
  //       })
  //   }
  // }
  // useEffect( () => {
  //   fetchMydata();
  // }, [])

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
        <Coin />
        <div className="profile-button-div">
          <input type="submit" name="add-button" className="profile-button" value="프로필편집" />
        </div>
      </div>
      <div className="myPage-layout-bottom">
        <img src={Profile} className="profile-img" alt="프로필" />
        <div style={{ height: '50px' }}>
          <h2 className="profile-name">{/* {nick} */}민규민규민규민규민규</h2>
          <p className="introduce-text">자기소개: {/* {introduce} */} 피곤해요</p>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
