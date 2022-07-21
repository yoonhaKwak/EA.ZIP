import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SamplePage from 'pages/SamplePage';
import SearchPage from 'pages/SearchPage';
import LoginForm from 'pages/LoginForm';
import SignIn from 'pages/SignIn';
import Modal from 'components/part/Modal';
import ItemDetail from 'components/part/ItemDetail';
import Mypage from 'pages/Mypage';

import KakaoMapTest from 'API/KakaoMapTest';
import NormalSearch from 'pages/NormalSearch';
import KakaoSearch from 'API/KakaoSearch';

import KakaoMap from 'API/KakaoMap';
import FirstPage from 'pages/FirstPage';


function App() {
        return (
                <Router>
                        <Routes>
                                <Route path="/" element={<SamplePage />} />
                                <Route path="/normalsearch" element={<NormalSearch />} />
                                <Route path="/Modal" element={<Modal />} />
                                <Route path="ItemDetail" element={<ItemDetail />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/login" element={<LoginForm />} />
                                <Route path="/register" element={<SignIn />} />
                                <Route path="/mypage" element={<Mypage />} />
                                <Route path="/kakaomap" element={<KakaoSearch />} />
                                <Route path="/first" element={<FirstPage />} />
                        </Routes>
                </Router>
        );
}

export default App;
