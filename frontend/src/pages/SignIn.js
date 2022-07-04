import MainHeader2 from "../components/part/MainHeader2";
import React from "react";
import background from "../styles/background/1.jpg"
import styled from "styled-components";
import pallette from "../styles/pallette";

const Container = styled.div`
max-width: 1920px; width: 100%;
background:url(${background}) no-repeat;
background-size: cover;
`;

const Positioner = styled.div`
  display: flex; justify-content: center; align-items: center; width: 100%; padding-top: 120px;
  background: rgba(0, 0, 0, 0.25);
`;

const Rectangle = styled.div`
  width: 610px; background-color: #f6f6f6; box-shadow: 4px 4px 20px 0 rgba(0, 0, 0, 0.25); text-align:center; font-size: 35px;
  border: 4px solid #ff9431; height: 640px; border-radius: 70px; margin-bottom: 160px; font-weight: bold; color: #ff9431; padding-top: 46px;
`;

const InputBox1 = styled.div`
    max-width: 420px; width: 100%; margin: auto; margin-bottom: 20px;
`;

const InputBox2 = styled.div`
    max-width: 420px; width: 100%; margin: 30px auto;
`;

const Button2 = styled.button`
    border-radius: 15px; line-height: 40px; text-align: center; font-weight: bold; border: none; cursor: pointer; padding: 0 10px;
    font-size: 20px; background-color: ${pallette.orange[0]}; color: #fff; max-width: 128px; width: 100%;
`;
const Button3 = styled.button`
    border-radius: 15px; line-height: 45px; text-align: center; font-weight: bold; border: 1px; cursor: pointer; padding: 0 10px;
    font-size: 15px; background-color: ${pallette.orange[0]}; color: #fff; max-width: 103px; width: 100%; float: right; margin-bottom: 20px ;
`;

const InputText1 = styled.input`
    width: 300px; font-size: 18px; box-sizing: border-box; height: 45px; float: left;
    border: 1px solid #d1d1d1; border-radius: 10px; padding-left:15px; 
    :focus {
        outline: none;
        width: 300px; 
    }
    ::placeholder {
        color: #c6c6c6;
    }
`;

const InputText = styled.input`
    width: 100%; font-size: 18px; box-sizing: border-box; height: 45px;
    border: 1px solid #d1d1d1; border-radius: 10px; padding-left:15px;
    :focus {
        outline: none;
        width: 100%; 
    }
    ::placeholder {
        color: #c6c6c6;
    }
`;

const SignIn = () => {

    return (
        <Container>
            <MainHeader2 />
            <Positioner>
                <Rectangle>
                    회원가입
                    <InputBox2>
                        <Button3 to='#'>아이디 확인</Button3>
                        <InputText1 type="text" />
                    </InputBox2>
                    <InputBox1>
                        <InputText type="password" />
                    </InputBox1>
                    <InputBox1>
                        <InputText type="password" />
                    </InputBox1>
                    <InputBox1>
                        <InputText type="text" />
                    </InputBox1>
                    <InputBox1>
                        <InputText type="text" />
                    </InputBox1>
                    <InputBox1>
                        <InputText type="text" />
                    </InputBox1>
                    <Button2>완료</Button2>
                </Rectangle>
            </Positioner>
        </Container>
    );
};

export default SignIn;
