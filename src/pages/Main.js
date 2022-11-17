import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../styles/Main.css';
import axios from "axios";
import Page from '../components/Page';

const Main = (props) => {

  const [data, setData] = useState([]);
  const [currentpage, setCurrentpage] = useState(1);

  const setPage = (e) => {
    setCurrentpage(e);
  };

  const getQuestion = async () => {
    await axios.get(`/api/question?page=${currentpage}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      })
  }

  useEffect( () => {
    getQuestion();
  }, []);

  return (
    <>
      <div className="main-container">
        <Header />
        <div id='main-button-layout'>
        <button>작성하기</button>
        </div>
        <div id="list-box">
          <div id='list-text-layout'>
          <h2 id="list-text">질문</h2>
          </div>
          <div id="table-box">
            <table id='main-table'>
              <thead>
                <tr>
                  <td>No</td>
                  <td className="title">제목</td>
                  <td>글쓴이</td>
                  <td>작성시간</td>
                  <td>좋아요</td>
                  <td>카테고리</td>
                  <td>조회</td>
                </tr>
              </thead>
              <tbody>
              {data.map((data, i) => (
                <tr id="main-tr">
                  <td>{data.id}</td>
                  <td>{data.title}</td>
                  <td>{data.createdAt}</td>
                  <td>{data.User.nick}</td>
                  <td>{data.Goods}</td>
                  <td>{data.category}</td>
                  <td>{data.views}</td>
                </tr>
              ))}
              </tbody>
            </table>
            <Page setPage={setPage}/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
