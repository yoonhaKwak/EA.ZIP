import logo from './logo.svg';
import './App.css';
import TestApi from "./TestApi";
import Filter from "./Filter";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from "./oauth/kakao/Login";
import OAuth2RedirectHandler from "./oauth/kakao/OAuth2RedirectHandler";

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/login" element={<Login/>} />
              <Route path="/oauth/kakao/callback" element={<OAuth2RedirectHandler/>} />
          </Routes>
      </Router>
  );
}

export default App;
