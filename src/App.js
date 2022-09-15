import './App.css';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  const [bg, setBg] = useState('')
  const changeBg = _bg => {
    setBg(_bg);
  }
  return (
    <div className={bg}>
      <Login bg={changeBg} />
      {/* <BrowserRouter>
=======
    <div>
      {/*<Login />*/}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          {/*<Route path="/page1/*" element={<Page1 />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
