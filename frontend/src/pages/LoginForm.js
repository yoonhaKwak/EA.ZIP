import MainHeader2 from "../components/part/MainHeader2";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import background from "../styles/background/1.jpg"
import logo1 from '../styles/img/Group 64.svg';
import naverlogo from '../styles/img/Naver.svg';
import kakaologo from '../styles/img/Kakao.svg';
import googlelogo from '../styles/img/Google.svg';
import pallette from "../styles/pallette";
import { Link } from "react-router-dom";
import axios from "axios";

const Container = styled.div`
max-width: 1920px; width: 100%;
background:url(${background}) no-repeat;
background-size: cover;
`;

const Positioner = styled.div`
  display: flex; justify-content: center; align-items: center; width: 100%; padding-top: 180px;
  background: rgba(0, 0, 0, 0.5);
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

const HandleInputId = styled.input`
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

const HandleInputPw = styled.input`
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

const LoginForm = () => {
    const [inputId, setInputId] = useState('')
    const [inputPw, setInputPw] = useState('')

    // input data 의 변화가 있을 때마다 value 값을 변경해서 useState 해준다
    const handleInputId = (e) => {
        setInputId(e.target.value)
    }
    const handleInputPw = (e) => {
        setInputPw(e.target.value)
    }
    // login 버튼 클릭 이벤트
    const onClickLogin = () => {
        console.log('click login')
    }
    // 페이지 렌더링 후 가장 처음 호출되는 함수
    useEffect(() => {
        axios.get('./logintest.json')
            .then(res => console.log(res))
            .catch()
    },
        // 페이지 호출 후 처음 한번만 호출될 수 있도록 [] 추가
        [])
    return (
        <Container>
            <MainHeader2 />
            <Positioner>
                <Reactangle>
                    <Logo to='/'><img src={logo1} alt="" /></Logo>
                    <InputBox1>
                        <HandleInputId placeholder="아이디" name="input_id" type="text" value={inputId} onChange={handleInputId} />
                    </InputBox1>
                    <InputBox2>
                        <HandleInputPw placeholder="비밀번호" name="input_pw" type="password" value={inputPw} onChange={handleInputPw} />
                    </InputBox2>
                    <LoginBox onClick={onClickLogin}>로그인</LoginBox>
                    <div />
                    <Buttons1><Link to='/register'>회원가입</Link></Buttons1>
                    <Buttons2>아이디 찾기</Buttons2>
                    <Buttons2>비밀번호 찾기</Buttons2>
                    <div />
                    <SnsBox>
                        <BorderSpan></BorderSpan>
                        <Psns>간편 로그인</Psns>
                        <BorderSpan></BorderSpan>
                    </SnsBox>
                    <Buttons1 style={{ padding: '10px' }}><img src={naverlogo} alt="" /></Buttons1>
                    <Buttons1 style={{ padding: '10px' }}><img src={kakaologo} alt="" /></Buttons1>
                    <Buttons1 style={{ padding: '10px' }}><img src={googlelogo} alt="" /></Buttons1>
                </Reactangle>
            </Positioner>
        </Container>
    );
};
export default LoginForm;