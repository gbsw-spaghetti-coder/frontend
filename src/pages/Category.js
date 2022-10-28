import React from 'react';
import Header from '../components/Header';
import '../styles/category.css';

const Category = () => {
    let front = document.querySelector('.category-button-frontend');
    let back = document.querySelector('.category-button-backend');
    let dbAndServer = document.querySelector('.category-button-db_Server');
    let etc = document.querySelector('.category-buttonon-Etc');

    const onClickToFront = () => {
        
    }

  return (
    <div className="category-container">
      <Header />
      <div className="category-button-div">
        <input
          type="submit"
          name="category-button-front"
          className="category-button-frontend"
          value="Frontend"
        />
        <input
          type="submit"
          name="category-button-back"
          className="category-button-backend"
          value="Backend"
        />
        <input
          type="submit"
          name="category-button-DBAndServer"
          className="category-button-db_Server"
          value="DB/Server"
        />
        <input
          type="submit"
          name="category-button-etc"
          className="category-button-Etc"
          value="기타"
        />
      </div>
      <div className='categor'></div>
    </div>
  );
};

export default Category;
