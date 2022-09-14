import './App.css';
import Login from './pages/login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Login />
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
