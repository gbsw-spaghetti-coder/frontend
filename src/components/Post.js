import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/post.css';
import { Link, useParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import Comment from './Comment';
import Like from './Like';
import {FcLike} from "react-icons/fc";

const Post = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const [nick, setNick] = useState("");
  const [good, setGood] = useState(0);
  const [count, setCount] = useState(0);
  const {id} = useParams();

  const showModal = () => {
    setModalOpen(true);
  };

  const countUP = async () => {
    await axios.get(`/api/question/good/${id}`, {withCredentials: true})
      .then((res) => {
        alert(res.data.message);
        window.location.reload();
      }).catch((err) => {
        console.error(err);
        alert(err.response.data.message);
      })
  };

  const deleteQuestion = async () => {
    await axios.delete(`/api/question/${id}`, {withCredentials: true})
      .then((res) => {
        alert(res.data.message);
        window.location.href = "/";
      })
      .catch((err) => {
        alert(err.response.data.message);
      })
  }

  useEffect(async () => {
    console.log(id);
    await axios
      .get(`/api/question/${id}`, { withCredentials: true })
      .then((res) => {
        setData(res.data[0]);
        setNick(res.data[0].User.nick);
        setGood(res.data[0].Goods.length);
      }).catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <div className="post-container">
      <div className="post-title-layout-top">
        <div className="post-title">
          <h6>{data.title}</h6>
        </div>
        <div className="post-info">
          <span className="title-item1">{nick}</span>
          <span className="title-item2">{data.updatedAt}</span>
          <span className="title-item3">조회 {data.views}</span>
          <span className="title-item4">좋아요 {good}</span>
          <span className="title-item5">{data.category}</span>
        </div>
      </div>
      <div className="post-title-layout-bottom">
        <button type="submit" className="post-del-btn" name="delete-button" onClick={deleteQuestion}>
          {' '}
          <FaTrash className="trash-icon" />
          삭제
        </button>
        <div className="post-text-div">
          <div style={{ marginTop: '10px' }} dangerouslySetInnerHTML={{__html : data.content}}></div>
        </div>
        <div></div>
        <div className="like-container">
          <FcLike className="like-icon" onClick={countUP}/>
          <p className="like-count">{good}</p>
        </div>
      </div>
      <div className="comment-div" onClick={showModal}>
        <BiCommentDetail className="comment-icon" />
      </div>
      {modalOpen && <Comment setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Post;
