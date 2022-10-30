import React from 'react';
import Header from '../components/Header';
import '../styles/Main.css';

const Main = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <div id='list-box'>
          <h2 id='list-text'>질문</h2>
          <div id='table-box'>
            <table>
              <thead>
                <tr>
                  <td>No</td>
                  <td class="title">제목</td>
                  <td>글쓴이</td>
                  <td>작성시간</td>
                  <td>좋아요</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>속보! 박경민 열애설! (아무도 안궁금함) </td>
                  <td>박민규</td>
                  <td>2022-10-22</td>
                  <td>15</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
