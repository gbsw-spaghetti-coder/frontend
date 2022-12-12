import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';
import Search from '../images/search.png';
import Menu from '../images/menu.png';
import Logo from '../images/logo.png';


const Header = () => {

  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    console.log(token)
  }, []);

  const logout = async () => {
    if (localStorage.getItem('token') === null) {
      alert("로그인이 안 되어 있습니다")
    } else {
      localStorage.clear();
      await axios.get('/api/auth/logout', {withCredentials: true})
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          window.location.href = "/login";
          localStorage.clear();
        }).catch((error) => {
          alert(error.response.data.message);
        })
    }
  }

  const handleGoHome = () => {
    window.location.href = "/";
  }

  return (
    <div className="header-container">
      <div onClick={handleGoHome}>
      <div className='logo-header'>
      <img src={Logo} alt="logo" className="logo-header" />
      </div>
      </div>
      <div className="menu-layout">
        {token ? (
          <Link to="/mypage">
            <button>마이페이지</button>
          </Link>
        ) : (
          <p></p>
        )}
        <Link to="/category">
        <button>카테고리</button>
        </Link>
      </div>
      <div className="menu-layout-mobile">
        <button type="submit" className="menu-icon-button">
          <img src={Menu} alt="메뉴바" className="menu-icon" />
        </button>
      </div>
      <div className="search-layout">
        <input
          type="text"
          placeholder="검색할 게시글을 입력해주세요."
          className="search-input"
          name="search"
        />
        <button className="search-button" type="submit">
          <img src={Search} alt="검색" className="search-icon" />
        </button>
      </div>
      <div className="lol-layout">
        {token?(
          <div className="l-layout" onClick={logout}>
            <span>로그아웃</span>
          </div>
        ) : (
          <div className="lo-layout">
            <Link to="/login">
            <span>로그인</span>
            </Link>
            <div className="height-line"></div>
            <Link to="/signup">
            <span>회원가입</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
