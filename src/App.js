import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Error, SignUp, Main, MyPage, Category, PwEdit, PostDetail, Write, CategoryPost } from './pages/index';


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
          <Route path="/categorylist" element={<Category />} />
          <Route path="/password" element={<PwEdit />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/write" element={<Write />} />
          <Route path='/category/:category' element={<CategoryPost />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
