import "./App.css";
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import classNames from "classnames";
import { useState } from "react";

const App = () => {
  const [bg, setBg] = useState('')
  const changeBg = _bg => {
    setBg(_bg);
  }
  return (
    <div className={bg}>
      <Login bg={changeBg} />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" component={Login} exact={true} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
