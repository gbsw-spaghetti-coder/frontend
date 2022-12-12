import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import '../styles/Main.css';
import '../styles/page.css';
import axios from 'axios';
import Pagination from 'react-js-pagination';

const Main = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handlePageChange = (page) => {
    setPage(page);
  };

  const getQuestion = async () => {
    await axios
      .get(`/api/question/?page=${page}`, { withCredentials: true })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getQuestion();
  }, [page]);

  return (
    <>
      <div className="main-container">
        <Header />
        <Link to="write">
          <div id="main-button-layout">
            <button>작성하기</button>
          </div>
        </Link>
        <div id="list-box">
          <div id="list-text-layout">
            <h2 id="list-text">질문</h2>
          </div>
          <div id="table-box">
            <table id="main-table">
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
                    <td>
                      <Link to={`/post/${data.id}`}>{data.id}</Link>
                    </td>
                    <td>{data.title}</td>
                    <td>{data.User.nick}</td>
                    <td>{data.createdAt}</td>
                    <td>{data.Goods.length}</td>
                    <td>{data.category}</td>
                    <td>{data.views}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Pagination
              activePage={page}
              itemsCountPerPage={10}
              totalItemsCount={450}
              pageRangeDisplayed={10}
              prevPageText={'‹'}
              nextPageText={'›'}
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
