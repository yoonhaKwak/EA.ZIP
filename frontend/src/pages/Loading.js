import React from 'react';
import styled from 'styled-components';
import loading from '../styles/icons/loading (2).svg';

const Background = styled.div`
    position: absolute;
    width: 100vw;
    height: 100vh;
    top: 0;
    left:0;
    background: #ffff;
    z-index: 999;
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
`;

const LoadingText = styled.div`
    font: 2rem 'Noto Sans KR';
    text-align: center;
`;

export const Loading = () => {
    return (
        <Background>
            <img src={loading} alt='로딩중' width='5%' />
            <LoadingText>loading...</LoadingText>
        </Background>
    );
}

export default Loading;