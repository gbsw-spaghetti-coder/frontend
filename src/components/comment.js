import React from 'react';
import '../styles/comment.css'

const comment = (props) => {
  const commentClose = () => {
    props.commentClose();
  };

  return (
    <div className="comment-container" onClick={commentClose}>
      <div className="comment-body" onClick={(e) => e.stopPropagation()}>
        <button className="commentCloseBtn" onClick={commentClose}>
          ✖
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default comment;
