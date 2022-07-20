import React from "react";
import styled from "styled-components";

const Speakbox = styled.div`
background-color: #E8E8E8; z-index:101; border: 1px solid #C6C6C6; position: absolute; border-radius: 15px;
width: 342px; height: 45px; top: 20px; left: 740px; text-align: center; font-size: 15px; font-weight: bold;
:after{
    content:""; position: absolute; top: 1px; left: -40px; border-right: 50px solid #E8E8E8;
     border-top: 1px solid transparent; border-bottom: 10px solid transparent; z-index: 1;
}
:before{
    content:""; position: absolute; border-top: 1px solid transparent; border-bottom: 9.5px solid transparent;
    border-right: 50px solid #C6C6C6; left: -44px; z-index: 0;
    }
`

export default function SpeakBox() {
    return (
        <>
            <Speakbox>
                <p>색깔이 진할수록 매물 갯수가 많습니다.</p>
            </Speakbox>
        </>
    );
}