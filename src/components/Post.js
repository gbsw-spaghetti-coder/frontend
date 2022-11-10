import React from 'react';
import '../styles/post.css';

const Post = () => {
  return (
    <div className='post-container'>
        <div className='post-title-layout'>
          <div className='post-title'>
          <h6>이거 어떻게 해야 margin이 먹히나요??</h6>
          </div>
          <div className='post-info'>
          <span className='title-item1'>박경민</span>
          <span className='title-item2'>2022-10-22</span>
          <span className='title-item3'>조회 59</span>
          <span className='title-item4'>좋아요 10</span>
          <span className='title-item5'>CSS</span>
          </div>
        </div>
    </div>
  )
}

export default Post;