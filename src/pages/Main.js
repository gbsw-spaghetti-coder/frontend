import React, { useState } from 'react';
import Header from '../components/Header';
import '../styles/Main.css';
import Page from '../components/Page';

const Main = () => {
  return (
    <>
      <div className="main-container">
        <Header />
        <div id="main-button-layout">
          <button>작성하기</button>
        </div>
        <div id="list-box">
          <div id="list-text-layout">
            <h2 id="list-text">질문</h2>
          </div>
          <div id="table-box">
            <table id="main-table">
              <thead>
                <tr>
                  <td>No</td>
                  <td class="title">제목</td>
                  <td>글쓴이</td>
                  <td>작성시간</td>
                  <td>좋아요</td>
                  <td>카테고리</td>
                  <td>조회</td>
                </tr>
              </thead>
              <tbody>
                <tr id="main-tr">
                  <td>9</td>
                  <td>이거 어떻게 해야 margin이 먹히나요??</td>
                  <td>박경민</td>
                  <td>2022-10-22</td>
                  <td>10</td>
                  <td>CSS</td>
                  <td>59</td>
                </tr>
                <tr id="main-tr">
                  <td>8</td>
                  <td>밑에분 php 무시하지 마세요</td>
                  <td>임재현</td>
                  <td>2022-10-22</td>
                  <td>1</td>
                  <td>PHP</td>
                  <td>20</td>
                </tr>
                <tr id="main-tr">
                  <td>7</td>
                  <td>php 좋은거 맞나요?</td>
                  <td>박민규</td>
                  <td>2022-10-22</td>
                  <td>5</td>
                  <td>PHP</td>
                  <td>100</td>
                </tr>
                <tr id="main-tr">
                  <td>6</td>
                  <td>자바로 은행 취업 가능할까요?</td>
                  <td>김동혁</td>
                  <td>2022-10-22</td>
                  <td>20</td>
                  <td>JAVA</td>
                  <td>10</td>
                </tr>
                <tr id="main-tr">
                  <td>5</td>
                  <td>스프링 학기과제 급하게 물어봅니다</td>
                  <td>권시경</td>
                  <td>2022-10-22</td>
                  <td>100</td>
                  <td>Spring</td>
                  <td>150</td>
                </tr>
                <tr id="main-tr">
                  <td>4</td>
                  <td>밑에분 똑같은 글 도배하지 말아주세요</td>
                  <td>김진효</td>
                  <td>2022-10-22</td>
                  <td>3</td>
                  <td>CSS</td>
                  <td>10</td>
                </tr>
                <tr id="main-tr">
                  <td>3</td>
                  <td>이거 어떻게 해야 margin이 먹히나요??</td>
                  <td>박경민</td>
                  <td>2022-10-22</td>
                  <td>0</td>
                  <td>CSS</td>
                  <td>0</td>
                </tr>
                <tr id="main-tr">
                  <td>2</td>
                  <td>이거 어떻게 해야 margin이 먹히나요??</td>
                  <td>박경민</td>
                  <td>2022-10-22</td>
                  <td>0</td>
                  <td>CSS</td>
                  <td>0</td>
                </tr>
                <tr id="main-tr">
                  <td>1</td>
                  <td>이거 어떻게 해야 margin이 먹히나요??</td>
                  <td>박경민</td>
                  <td>2022-10-22</td>
                  <td>0</td>
                  <td>CSS</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
            <Page />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
