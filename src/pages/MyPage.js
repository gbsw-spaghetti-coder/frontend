import React from 'react';
import '../styles/myPage.css';
import Header from '../components/Header';
import Profile from '../images/profile.png'

const myPageLayout = () => {
  return (
    <div className='myPage-container'>
        <Header />
        <div className='myPage-layout-top'></div>
        <div className='myPage-layout-bottom'>
          <img src={Profile} className='profile-img' alt='프로필' />
        </div>
    </div>
  )
}

export default myPageLayout; 