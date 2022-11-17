import React, { useState } from 'react';
import '../styles/post.css';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { BiCommentDetail } from 'react-icons/bi';
import Comment from './Comment';

const Post = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  }


  return (
    <div className="post-container">
      <div className="post-title-layout-top">
        <div className="post-title">
          <h6>이거 어떻게 해야 margin이 먹히나요??</h6>
        </div>
        <div className="post-info">
          <span className="title-item1">박경민</span>
          <span className="title-item2">2022-10-22</span>
          <span className="title-item3">조회 59</span>
          <span className="title-item4">좋아요 10</span>
          <span className="title-item5">CSS</span>
        </div>
      </div>
      <div className="post-title-layout-bottom">
        <button type="submit" className="post-del-btn">
          {' '}
          <FaTrash className="trash-icon" />
          삭제
        </button>
        <div className="post-text-div">
          <span style={{ marginTop: '10px' }}>
            이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?
          </span>
          <span>이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?</span>
          <span>이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?</span>
          <span>이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?</span>
          <span>이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?</span>
          <span>이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?</span>
          <span>이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?</span>
          <span>이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?</span>
          <span>이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?</span>
          <span>이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?</span>
          <span>이거 마진이 안먹혀서 지금 고생 중인데 어떻게 해야되나요?</span>
        </div>
      </div>
      <div className="comment-div" onClick={showModal} >
        <BiCommentDetail className="comment-icon" />
      </div>  
      { modalOpen && <Comment setModalOpen={setModalOpen} /> }
    </div>
  );
};

export default Post;
