import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { Login, Error, SignUp, Main, MyPage, Category, CoinPage } from './pages/index';
// import classNames from 'classnames';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/category" element={<Category />} />

          <Route path="/coin" element={<CoinPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
