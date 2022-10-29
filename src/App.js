import { useState } from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { Login, Error, SignUp, Main, MyPage, Category, Frontend, Backend, DBServer, Etc, Div } from './pages/index';
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

          <Route path="/frontend" element={<Frontend />} />
          <Route path="/backend" element={<Backend />} />
          <Route path="/db_server" element={<DBServer />} />
          <Route path="/etc" element={<Etc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
