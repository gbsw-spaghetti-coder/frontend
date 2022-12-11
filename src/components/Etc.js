import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/etc.css';
import { Sql, Linux, Unity, Arduino, Android } from '../pages/img';

const Etc = () => {
  return (
    <div className="etcCategory-container">
      <div className="etc-category-layout">
        <div className="etc-category-to-top">
          <div className="etc-category-item">
            <Link to="/category/sql">
              <img className="sql-img" src={Sql} alt="sql" />
            </Link>
          </div>

          <div className="etc-category-item">
            <Link to="/category/linux">
              <img className="linux-img" src={Linux} alt="linux" />
            </Link>
          </div>

          <div className="etc-category-item">
            <Link to="/category/unity">
              <img className="unity-img" src={Unity} alt="unity" />
            </Link>
          </div>

          <div className="etc-category-item">
            <Link to="/category/arduino">
              <img className="arduino-img" src={Arduino} alt="arduino" />
            </Link>
          </div>
        </div>

        <div className="etc-category-to-middle">
          <div className="etc-category-item">
            <Link to="/category/android">
              <img className="android-img" src={Android} alt="android" />
            </Link>
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
