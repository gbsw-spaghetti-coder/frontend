import "./App.css";
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Login />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" component={Login} exact={true} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
