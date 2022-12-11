import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/etc.css';
import { Sql, Linux, Unity, Arduino, Android } from '../pages/img';

const Etc = () => {
  return (
    <div className="etcCategory-container">
      <div className="etc-category-layout">
        <div className="etc-category-to-top">
        <Link to="/category/sql">
          <div className="etc-category-item">
            <img className="sql-img" src={Sql} alt="sql" />
          </div>
        </Link>
        
        <Link to="/category/linux">
          <div className="etc-category-item">
            <img className="linux-img" src={Linux} alt="linux" />
          </div>
        </Link>
        
        <Link to="/category/unity">
          <div className="etc-category-item">
            <img className="unity-img" src={Unity} alt="unity" />
          </div>
        </Link>
        
        <Link to="/category/arduino">
          <div className="etc-category-item">
            <img className="arduino-img" src={Arduino} alt="arduino" />
          </div>
        </Link>
        </div>
        
        <div className="etc-category-to-middle">
        <Link to="/category/android">
          <div className="etc-category-item">
            <img className="android-img" src={Android} alt="android" />
          </div>
        </Link>

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
