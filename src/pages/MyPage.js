import React, { useState, useEffect } from 'react';
import '../styles/myPage.css';
import Header from '../components/Header';
import Profile from '../images/profile.png';
import Coin from './Coin';
import axios from 'axios';

const MyPage = () => {
  const [nick, setNick] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [coin, setCoin ] = useState(0);
  const [profileImg, setProfileImg] = useState("");

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

  const fetchMydata = async () => {
    if(localStorage.getItem("token") === null) {
      alert("로그인 하세요")
      window.location.href = "/";
    } else {
      await axios.get('/api/user', {withCredentials: true})
        .then((res) => {
          setNick(res.data.nick);
          setIntroduce(res.data.introduce);
          setProfileImg(res.data.profile_img);
          setCoin(res.data.point);
        }).catch((error) => {
          console.log(error);
        })
    }
  }
  useEffect( () => {
    fetchMydata();
  }, [])

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
          <div>
          </div>
        </div>
      </div>
      <div className="myPage-layout-bottom">
        <img src={profileImg} className="profile-img" alt="프로필" />
        <div style={{ height: '30px'}}>
          <h2 className="profile-name"> {nick}</h2>
          <p className="introduce-text">자기소개: {introduce}</p>
        </div>
        <Coin coin={coin}/>
      </div>
      <div className="myPage-layout-bottom2">
          <div className="myPage-table-to-textarea" style={{ overflow: 'auto' }}>
            <table>
              <tbody>
                <tr className='myPage-tr'>
                  <td className='myPage-td'>이거 어떻게 해야 margin이 먹히나요??</td>
                  <td className='myPage-td-category'>CSS</td>
                </tr>
                <tr className='myPage-tr'>
                  <td className='myPage-td'>이거 어떻게 해야 margin이 먹히나요??</td>
                  <td className='myPage-td-category'>CSS</td>
                </tr>
                <tr className='myPage-tr'>
                  <td className='myPage-td'>이거 어떻게 해야 margin이 먹히나요??</td>
                  <td className='myPage-td-category'>CSS</td>
                </tr>
                <tr className='myPage-tr'>
                  <td className='myPage-td'>이거 어떻게 해야 margin이 먹히나요??</td>
                  <td className='myPage-td-category'>CSS</td>
                </tr>
                <tr className='myPage-tr'>
                  <td className='myPage-td'>이거 어떻게 해야 margin이 먹히나요??</td>
                  <td className='myPage-td-category'>CSS</td>
                </tr>
                <tr className='myPage-tr'>
                  <td className='myPage-td-last'>이거 어떻게 해야 margin이 먹히나요??이거 어떻게 해야 margin이 먹히나요??이거 어떻게 해야 margin이 먹히나요??이거 어떻게 해야 margin이 먹히나요??이거 어떻게 해야 margin이 먹히나요??이거 어떻게 해야 margin이 먹히나요??이거 어떻게 해야 margin이 먹히나요??이거 어떻게 해야 margin이 먹히나요?? </td>
                  <td className='myPage-td-category-last'>CSS</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="myPage-table-to-comment" style={{ overflow: 'auto' }}>
            <table>
              <tbody>
                <tr>
                  <td className='myPage-td-comment'>이거 이렇게해야됨 ㅋㅋ
                  <td className='myPage-td-comment-title'>제목: 이거 어떻게 해야 margin이 먹히나요?</td>

                  </td>
                </tr>
                <tr>
                  <td className='myPage-td-comment'>이거 이렇게해야됨 ㅋㅋ
                  <td className='myPage-td-comment-title'>제목: 이거 어떻게 해야 margin이 먹히나요?</td>
                  </td>
                  
                </tr>
                <tr>
                  <td className='myPage-td-comment'>이거 이렇게해야됨 ㅋㅋ
                  <td className='myPage-td-comment-title'>제목: 이거 어떻게 해야 margin이 먹히나요?</td> 
                  </td>
                </tr>
                <tr>
                  <td className='myPage-td-comment'>이거 이렇게해야됨 ㅋㅋ
                  <td className='myPage-td-comment-title'>제목: 이거 어떻게 해야 margin이 먹히나요?</td>
                  </td>
                </tr>
                <tr>
                  <td className='myPage-td-comment'>이거 이렇게해야됨 ㅋㅋ
                  <td className='myPage-td-comment-title'>제목: 이거 어떻게 해야 margin이 먹히나요?</td>
                  </td>
                </tr>
                <tr>
                  <td className='myPage-td-comment'>이거 이렇게해야됨 ㅋㅋ
                  <td className='myPage-td-comment-title'>제목: 이거 어떻게 해야 margin이 먹히나요?</td>

                  </td>
                </tr>
                <tr>
                  <td className='myPage-td-comment'>이거 이렇게해야됨 ㅋㅋ
                  <td className='myPage-td-comment-title'>제목: 이거 어떻게 해야 margin이 먹히나요?</td>

                  </td>
                 
                </tr>
                <tr>
                  <td className='myPage-td-comment-last'>이거 이렇게해야됨 ㅋㅋ
                  <td className='myPage-td-comment-title'>제목: 이거 어떻게 해야 margin이 먹히나요?</td>

                  </td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
