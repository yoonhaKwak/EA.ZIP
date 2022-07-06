import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SamplePage from 'pages/SamplePage';
import SearchPage from 'pages/SearchPage';
import LoginForm from 'pages/LoginForm';
import SignIn from 'pages/SignIn';
import Modal from 'components/part/Modal';
import ItemDetail from 'components/part/ItemDetail';
import NaverApiMap from 'API/NaverApiMap';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SamplePage />} />
        <Route path="/Modal" element={<Modal />} />
        <Route path="ItemDetail" element={<ItemDetail />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<SignIn />} />
        <Route path="/maptest" element={<NaverApiMap />} />
      </Routes>
    </Router>
  );
}

export default App;
