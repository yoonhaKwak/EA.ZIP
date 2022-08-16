import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loading from 'pages/Loading';
import Test from 'pages/Test';
import Modal from 'components/part/Modal';
import KakaoSearch from 'API/KakaoSearch';

const OAuthRedirectHandler = lazy(() => import('pages/OAuthRedirectHandler'));
const FirstPage = lazy(() => import('pages/FirstPage'));
const NormalSearch = lazy(() => import('pages/NormalSearch'));
const TargetToNormalSearch = lazy(() => import('pages/TargetToNormalSearch'));
const TargetSearch = lazy(() => import('pages/TargetSearch'));
const SignIn = lazy(() => import('pages/SignIn'));
const LoginForm = lazy(() => import('pages/LoginForm'));
const HistoryPage = lazy(() => import('pages/HistoryPage'));
const Mypage = lazy(() => import('pages/Mypage'));
const SearchPage = lazy(() => import('pages/SearchPage'));



function App() {
        return (
                <Router>
                        <Suspense fallback={<Loading />}>
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
                        </Suspense>
                </Router>
        );
}

export default App;
