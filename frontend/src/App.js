import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SamplePage from 'pages/SamplePage';
import SearchPage from 'pages/SearchPage';
import LoginForm from 'pages/LoginForm';
import SignIn from 'pages/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SamplePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignIn />} />
      </Routes>
    </Router>
  );

}

export default App;
