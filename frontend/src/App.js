import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SamplePage from 'pages/SamplePage';
import SearchPage from 'pages/SearchPage';
import LoginForm from 'pages/LoginForm';
import SignIn from 'pages/SignIn';
import Modal from 'components/part/Modal';
import ItemDetail from 'components/part/ItemDetail';
import Mypage from 'pages/Mypage';
import TargetSearch from 'pages/TargetSearch';
import NormalSearch from 'pages/NormalSearch';

import KakaoSearch from 'API/KakaoSearch';
import ButtonTest from 'components/detail/ButtonTest';

import KakaoMap from 'API/KakaoMap';
import FirstPage from 'pages/FirstPage';
import OAuthRedirectHandler from 'pages/OAuthRedirectHandler';



function App() {
        return (
                <Router>
                        <Routes>
                                <Route path="/test" element={<SamplePage />} />
                                <Route path="/normalsearch" element={<NormalSearch />} />
                                <Route path="/Modal" element={<Modal />} />
                                <Route path="ItemDetail" element={<ItemDetail />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/login" element={<LoginForm />} />
                                <Route path="/oauth/kakao/callback" element={<OAuthRedirectHandler />} />
                                <Route path="/register" element={<SignIn />} />
                                <Route path="/mypage" element={<Mypage />} />
                                <Route path="/kakaomap" element={<KakaoSearch />} />
                                <Route path="/" element={<FirstPage />} />
                                <Route path="/buttontest" element={<ButtonTest />} />
                                <Route path="/targetsearch" element={<TargetSearch />} />
                        </Routes>
                </Router>
        );
}

export default App;
