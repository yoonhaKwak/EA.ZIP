import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from 'pages/SearchPage';
import LoginForm from 'pages/LoginForm';
import SignIn from 'pages/SignIn';
import Modal from 'components/part/Modal';
import Mypage from 'pages/Mypage';
import TargetSearch from 'pages/TargetSearch';
import TargetToNormalSearch from 'pages/TargetToNormalSearch';
import NormalSearch from 'pages/NormalSearch';
import KakaoSearch from 'API/KakaoSearch';
import HistoryPage from 'pages/HistoryPage';

import FirstPage from 'pages/FirstPage';
import OAuthRedirectHandler from 'pages/OAuthRedirectHandler';
import Test from 'pages/Test';
import Loading from 'pages/Loading';



function App() {
        return (
                <Router>
                        <Routes>
                                <Route path="/normalsearch" element={<NormalSearch />} />
                                <Route path="/Modal" element={<Modal />} />
                                <Route path="/search" element={<SearchPage />} />
                                <Route path="/login" element={<LoginForm />} />
                                <Route path="/oauth/kakao/callback" element={<OAuthRedirectHandler />} />
                                <Route path="/register" element={<SignIn />} />
                                <Route path="/mypage" element={<Mypage />} />
                                <Route path="/kakaomap" element={<KakaoSearch />} />
                                <Route path="/" element={<FirstPage />} />
                                <Route path="/targetsearch" element={<TargetSearch />} />
                                <Route path="/test" element={<Test />} />
                                <Route path="/normalsearch1" element={<TargetToNormalSearch />} />
                                <Route path="/loading" element={<Loading />} />
                                <Route path="/historypage" element={<HistoryPage />} />
                        </Routes>
                </Router>
        );
}

export default App;
