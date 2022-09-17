import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Error from './pages/Error';
import SignUp from './pages/SignUp';
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
          <Route path='/signup' element={<SignUp/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
