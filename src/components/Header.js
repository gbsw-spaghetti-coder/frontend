import React from 'react';
import '../styles/header.css';
import Search from '../images/search.png';
import Menu from '../images/menu.png';

const Header = () => {
  return (
    <div className="header-container">
      <div className="menu-layout">
        <button>마이페이지</button>
        <button>질문</button>
        <button>카테고리</button>
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
        <div className="lo-layout">
          <span>로그인</span>
          <div className="height-line"></div>
          <span>회원가입</span>
        </div>
        <div className="l-layout">
          <span>로그아웃</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
