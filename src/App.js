import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { Login, Error, SignUp, Main, MyPage, Category } from './pages/index';
// import classNames from 'classnames';

const App = () => {
  const [bg, setBg] = useState('');
  const changeBg = (_bg) => {
    setBg(_bg);
  };
  return (
    <div className={bg}>
      <BrowserRouter>
        <Routes> 
          <Route path="/login" element={<Login bg={changeBg} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Main />} />
          <Route path="*" element={<Error />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
