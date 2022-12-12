import React, { useEffect, useState } from 'react';
import { BsCoin } from 'react-icons/bs';
import '../styles/coin.css';
import PropTypes from 'prop-types';
import axios from 'axios';

const Coin = ({ coin }) => {
  const [point, setPoint] = useState(0);

  /*useEffect(async () => {
    await axios.get('/api/user', {withCredentials: true})
      .then((res) => {
        setPoint(res.data.point);
      })
  })*/

  return (
    <div className="coin-container">
      <div className="coin-layout">
        <BsCoin className="coin-icon" />
        <span className="coin-text">{coin}</span>
      </div>
    </div>
  );
};

export default Coin;
