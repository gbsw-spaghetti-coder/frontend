import React, { useState } from 'react';
import {BsCoin } from "react-icons/bs"
import '../styles/coin.css';
import PropTypes from 'prop-types';

const Coin = ({ coin }) => {

  return (
    <div className='coin-container'>
        <div className='coin-layout'>
        <BsCoin className='coin-icon' />
        <span className='coin-text'>{coin}</span>
        </div>
    </div>
  )
};

Coin.defaultProps = {
  coin : 1000
};

export default Coin;