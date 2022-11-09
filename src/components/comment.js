import React, { useState } from 'react';
import '../styles/comment.css'

const Comment = (props) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  
  const [commentArray, setCommentArray] = useState([
    { 
      id: name,
      comment: text
    }
  ])

  const commentClose = () => {
    props.commentClose();
  };

  const changeComment = (e) => {
      setText(e.target.value);
  }

  const deleteComment = () => {
    setText('');
  };

  const commentInput = event => {
    setText(event.target.value);
  };

  const commentEnter = event => {
    if (event.key === 'Enter' && event.target.value !== '') {
      event.preventDefault();
      const comArray = [...commentArray];
      comArray.push({ id: '박민규', comment: text});
      setCommentArray(comArray);
      event.target.value = '';
    }
  }

  return (
    <div className="comment-container" onClick={commentClose}>
      <div className="comment-body" onClick={(e) => e.stopPropagation()}>
        <button className="commentCloseBtn" onClick={commentClose}>
          ✖
        </button>
        {props.children}
        <div className='comment-layout'>
          <h2>Comment</h2>
            <div className='comment-layout-input'>
              <input 
              onChange={changeComment}
              className='comment-input' 
              name='comment' 
              value={text}
              placeholder='댓글을 입력해주세요 (Enter)'
              onKeyPress={event => {
                commentEnter(event);
              }}
              onKeyUp={event => {
                commentInput(event);
              }}
              />
              <div className='delete-comment-div'>
              <span className='delete-comment' onClick={deleteComment}>X</span>
              </div>            
            </div>
            <div className='commentArrayDiv'>
            {commentArray.map(data => (
                    <p className="comment-id-p" key={data.id}>
                      <span className="comment-id">{data.id}</span>
                      <span className="comment-text"> {data.comment}</span>
                    </p>
                  ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
