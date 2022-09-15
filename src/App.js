import './App.css';
import Login from './pages/login';
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
>>>>>>> d3049f1967c7c39e1809cd43ed97f89d52c45695

const App = () => {
  const [bg, setBg] = useState('')
  const changeBg = _bg => {
    setBg(_bg);
  }
  return (
<<<<<<< HEAD
    <div className={bg}>
      <Login bg={changeBg} />
      {/* <BrowserRouter>
=======
    <div>
      {/*<Login />*/}
      <BrowserRouter>
>>>>>>> d3049f1967c7c39e1809cd43ed97f89d52c45695
        <Routes>
          <Route path="/login" element={<Login />} />
          {/*<Route path="/page1/*" element={<Page1 />} />*/}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
