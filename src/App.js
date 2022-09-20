import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Error, SignUp, Header } from './pages/index';
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
          <Route path="/" element={<Login bg={changeBg} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/header" element={<Header />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
