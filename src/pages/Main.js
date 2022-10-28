import React from 'react';
import Header from '../components/Header';
import '../styles/Main.css';

const Main = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <h2>질문</h2>
        <table>
          <th>
            <td>No</td>
            <td>제목</td>
            <td>글쓴이</td>
            <td>작성시간</td>
            <td>좋아요</td>
          </th>
          <tr>
            <td>1</td>
            <td>속보! 박경민 열애설! (아무도 안궁금함) </td>
            <td>박민규</td>
            <td>2022-10-22</td>
            <td>15</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Main;
