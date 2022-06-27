import MainHeader2 from "../components/part/MainHeader2";
import React from "react";
import styled from "styled-components";
import background from "../styles/background/1.jpg"
import logo1 from '../styles/background/Group 64.svg';
import naverlogo from '../styles/background/Naver.svg';
import kakaologo from '../styles/background/Kakao.svg';
import googlelogo from '../styles/background/Google.svg';
import pallette from "../styles/pallette";
import { Link } from "react-router-dom";
import reactNaverLogin from "react-naver-login";
import KakaoLogin from "react-kakao-login";
import GoogleLogin from "react-google-login";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from "./SignIn";

const _clickSnsLoginKakao = (e) => {
    let kakaoid = e.profile.id; // 카카오에서 제공한 ID
};
const _clickSnsLoginNaver = (e) => {
    let naverid = e.id; // 네이버에서 제공한 ID
};
const _clickSnsLoginGoogle = (e) => {
    let googleid = e.Ft.NT; // 구글에서 제공한 ID
};

const Container = styled.div`
max-width: 1920px; width: 100%;
background:url(${background}) no-repeat;
background-size: cover;
`;

const Positioner = styled.div`
  display: flex; justify-content: center; align-items: center; width: 100%; padding-top: 180px;
  background: rgba(0, 0, 0, 0.25);
`;

const Reactangle = styled.div`
  width: 610px; background-color: #f6f6f6; box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.25); 
  border: 4px solid #ff9431; text-align: center; height: 556px; border-radius: 70px; margin-bottom: 160px; 
`;

const Logo = styled.div`
    padding: 45px 0 38px; text-decoration: none; text-align: center;
`;

const InputBox1 = styled.div`
    max-width: 320px; width: 100%; margin: 0 auto;margin-bottom: 20px;text-align: center;
`;

const InputBox2 = styled.div`
    max-width: 320px; width: 100%; margin: 0 auto;
    margin-bottom: 40px;
    text-align: center;
`;

const InputText = styled.input`
    width: 100%; font-size: 18px; box-sizing: border-box;
    height: 45px;
    border: 1px solid #d1d1d1; border-radius: 10px;
    padding-left:15px;
    :focus {
        outline: none;
        width: 100%; 
    }
    ::placeholder {
        color: #c6c6c6;
    }
`;

const LoginBox = styled.button`
    border-radius: 15px; line-height: 45px; text-align: center; font-weight: bold; border: none; cursor: pointer; padding: 0 10px;
    font-size: 20px; background-color: ${pallette.orange[0]}; color: #fff; max-width: 320px; width: 100%; margin: 0 auto 40px;
`;

const Buttons1 = styled.button`
    border: none; font-size: 14px; color:#854800; cursor: pointer; background-color: #f6f6f6; font-weight: bold;
`;
const Buttons2 = styled.button`
    border: none; border-left: 1px solid #854800; padding: 0 10px;
    font-size: 14px; color:#854800; cursor: pointer; background-color: #f6f6f6; font-weight: bold; margin-bottom: 41px;
`;
const SnsBox = styled.div`
    max-width: 320px; width: 100%; margin: 0 auto;
`;

const BorderSpan = styled.span`
    border-top: 1px solid #854800; display: inline-block; width: 28.8%; vertical-align: middle;
`;
const Psns = styled.p`
    font-size: 14px; color: #854800; font-weight: bold; display: inline-block; margin: 0 9.5%; padding-bottom: 30px;
`;

const LoginForm = (onChange) => {
    return (
        <Container>
            <MainHeader2 />
            <Positioner>
                <Reactangle>
                    <Logo to='/'><img src={logo1} alt="" /></Logo>
                    <InputBox1>
                        <InputText placeholder="아이디" type="text" onChange={onChange} />
                    </InputBox1>
                    <InputBox2>
                        <InputText placeholder="비밀번호" type="password" onChange={onChange} />
                    </InputBox2>
                    <LoginBox href="#">로그인</LoginBox>
                    <div />
                    <Buttons1 href="SignIn">회원가입</Buttons1>
                    <Buttons2>아이디 찾기</Buttons2>
                    <Buttons2>비밀번호 찾기</Buttons2>
                    <div />
                    <SnsBox>
                        <BorderSpan></BorderSpan>
                        <Psns>간편 로그인</Psns>
                        <BorderSpan></BorderSpan>
                    </SnsBox>
                    <Link to='/' style={{ padding: '20px' }} ><img src={naverlogo} alt="" /></Link>
                    <Link to='/' style={{ padding: '20px' }}><img src={kakaologo} alt="" /></Link>
                    <Link to='/' style={{ padding: '20px' }}><img src={googlelogo} alt="" /></Link>
                </Reactangle>
            </Positioner>
        </Container>
    );
};
export default LoginForm;