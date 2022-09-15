import './App.css';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import classNames from 'classnames';
import { useState } from 'react';


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
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
