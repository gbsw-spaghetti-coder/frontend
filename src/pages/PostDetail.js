import React from 'react';
import { BiCommentDetail } from 'react-icons/bs';
import '../styles/postD.css';
import Header from '../components/Header';
import Post from '../components/Post';

const PostDetail = () => {
  return (
    <div className="postDetail-container">
      <Header />
      <Post />
    </div>
  );
};

export default PostDetail;
