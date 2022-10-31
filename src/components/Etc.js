import React from 'react';
import '../styles/etc.css';
import { Sql, Linux, Unity, Arduino, Android } from '../pages/img';

const Etc = () => {
  return (
    <div className="etcCategory-container">
      <div className="etc-category-layout">
        <div className="etc-category-to-top">
          <div className="etc-category-item">
            <img className="sql-img" src={Sql} alt="sql" />
          </div>
          <div className="etc-category-item">
            <img className="linux-img" src={Linux} alt="linux" />
          </div>
          <div className="etc-category-item">
            <img className="unity-img" src={Unity} alt="unity" />
          </div>
          <div className="etc-category-item">
            <img className="arduino-img" src={Arduino} alt="arduino" />
          </div>
        </div>
        <div className="etc-category-to-middle">
          <div className="etc-category-item">
            <img className="android-img" src={Android} alt="android" />
          </div>
          <div className="etc-category-item">
            <p className="addToCategoryItem">+</p>
          </div>
          <div className="etc-category-item">
            <p className="addToCategoryItem">+</p>
          </div>
          <div className="etc-category-item">
            <p className="addToCategoryItem">+</p>
          </div>
        </div>
        <div className="etc-category-to-bottom">
          <div className="etc-category-item">
            <p className="addToCategoryItem">+</p>
          </div>
          <div className="etc-category-item">
            <p className="addToCategoryItem">+</p>
          </div>
          <div className="etc-category-item">
            <p className="addToCategoryItem">+</p>
          </div>
          <div className="etc-category-item">
            <p className="addToCategoryItem">+</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Etc;
