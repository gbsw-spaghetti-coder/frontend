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
          <option disabled>- 프론트엔드 -</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="js">JavaScript</option>
          <option value="ts">TypeScript</option>
          <option value="react">ReactJs</option>
          <option value="vue">VueJs</option>
          <option disabled>- 백엔드 -</option>
          <option value="c">C</option>
          <option value="c#">CS</option>
          <option value="c++">CPP</option>
          <option value="go">Go</option>
          <option value="java">JAVA</option>
          <option value="php">PHP</option>
          <option value="py">Python</option>
          <option value="rudy">Ruby</option>
          <option value="rust">Rust</option>
          <option value="spring">Spring</option>
          <option value="ts">TypeScript</option>
          <option value="node">NodeJs</option>
          <option disabled>- 기타 -</option>
          <option value="sql">Sql</option>
          <option value="linux">Linux</option>
          <option value="unity">Unity</option>
          <option value="arduino">Arduino</option>
          <option value="android">Android</option>
        </select>
      </div>
    </div>
  );
};

export default WriteLayout;
