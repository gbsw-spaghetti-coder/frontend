import React from 'react';
import '../styles/writeLayout.css';

const WriteLayout = () => {
  return (
    <div className="writeLayout-container">
      <div className="write-layout">
        <input
          type="text"
          placeholder="제목을 입력해주세요"
          name="write-title"
          className="writeToTitle"
        />
        <select name="choice" className="choiceToCategory">
          <option selected>카테고리 선택</option>
          <option>- 프론트엔드 -</option>
          <option>HTML</option>
          <option>CSS</option>
          <option>JavaScript</option>
          <option>TypeScript</option>
          <option>ReactJs</option>
          <option>VueJs</option>
          <option>- 백엔드 -</option>
          <option>C</option>
          <option>CS</option>
          <option>CPP</option>
          <option>Go</option>
          <option>JAVA</option>
          <option>PHP</option>
          <option>Python</option>
          <option>Ruby</option>
          <option>Rust</option>
          <option>Spring</option>
          <option>TypeScript</option>
          <option>NodeJs</option>
          <option>- 기타 -</option>
          <option>Sql</option>
          <option>Linux</option>
          <option>Unity</option>
          <option>Arduino</option>
          <option>Android</option>
        </select>
      </div>
    </div>
  );
};

export default WriteLayout;
