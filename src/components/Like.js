import React, { useState } from 'react';
import axios from 'axios';
import { FcLike } from 'react-icons/fc';
import '../styles/like.css';

const Like = () => {
  const [count, setCount] = useState(0);

  const countUP = async () => {
    await axios.get(`/api/post/1`, {withCredentials: true})
      .then((res) => {
        console.log(res.data.Goods.length);

      }).catch((err) => {
        console.error(err);
      })
  };

  return (
    <div className="like-container">
      <FcLike className="like-icon" onClick={countUP}/>
      <p className="like-count">{count}</p>
    </div>
  );
};

export default Like;
