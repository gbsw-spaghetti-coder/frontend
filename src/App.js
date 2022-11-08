import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import CoinPage from "./pages/Coin"
import { Login, Error, SignUp, Main, MyPage, Category, PwEdit } from './pages/index';
import Comment from './components/Comment';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes> 
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/category" element={<Category />} />
          <Route path="/password" element={<PwEdit />} />
          
          <Route path="/comment" element={<Comment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
