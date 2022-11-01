import React, { useState } from 'react';
import CoinImg from '../images/coin.png';
import '../styles/coin.css';

const Coin = () => {
  const [ coin, setCoin ] = useState();

  return (
    <div className='coin-container'>
        <div className='coin-layout'>
            <img src={CoinImg} alt="Coin" className='coin-img' />
            <p className='coin-text'>코인: {/* {coin} */} 1000G </p>
        </div>
    </div>
  )
}

export default Coin;