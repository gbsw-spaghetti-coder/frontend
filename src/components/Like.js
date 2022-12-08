import React, {useState} from 'react';
import { FcLike } from 'react-icons/fc';
import '../styles/like.css'

const Like = () => {
    const [count, setCount] = useState(0);

    const countUP = () => {
       setCount(count + 1);
    }

  return (
    <div className='like-container'>
        <FcLike className='like-icon' onClick={countUP}/>
        <p className='like-count'>{count}</p>
    </div>
  )
}

export default Like;