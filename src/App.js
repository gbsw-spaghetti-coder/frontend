import { Toast } from 'bootstrap';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Error, SignUp, Main, MyPage, Category, PwEdit, PostDetail, Write, WriteEdit } from './pages/index';


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
          <Route path="/post" element={<PostDetail />} />
          <Route path="/write" element={<Write />} />
          <Route path='/writeedit' element={<WriteEdit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
