import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/post.css';
import { Link, useParams } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import Comment from './Comment';
import Like from './Like';

const Post = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [data, setData] = useState([]);
  const { id } = useParams();
  const [nick, setNick] = useState('');
  const [good, setGood] = useState(0);

  const showModal = () => {
    setModalOpen(true);
  };

  useEffect(async () => {
    console.log(id);
    await axios
      .get(`/api/question/${id}`, { withCredentials: true })
      .then((res) => {
        setData(res.data[0]);
        console.log(res.data[0]);
        setNick(res.data[0].User.nick);
        setGood(res.data[0].Goods.length);
      })
      .catch((err) => {
        console.error(err);
      })
      .catch((err) => {
        console.error(err);
      });

    await axios
      .get(`/api/question/${id}`, { withCredentials: true })
      .then((res) => {
        setData(res.data[0]);
        console.log(res.data[0]);
      })
      .catch((err) => {
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
        </div>
      </div>
      <div className="post-title-layout-bottom">
        <button type="submit" className="post-del-btn" name="delete-button">
          {' '}
          <FaTrash className="trash-icon" />
          삭제
        </button>
        <div className="post-text-div">
          <span style={{ marginTop: '10px' }}>{data.content}</span>
        </div>
        <div></div>
        <Like />
      </div>
      <div className="comment-div" onClick={showModal}>
        <BiCommentDetail className="comment-icon" />
      </div>
      {modalOpen && <Comment setModalOpen={setModalOpen} />}
    </div>
  );
};

export default Post;
