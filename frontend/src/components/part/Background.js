import React from "react";
import styled from "styled-components";
import MainHeader from "./MainHeader";

const Container=styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: url(https://source.unsplash.com/random/1920x1080);
background-size: cover;
`;

const Background =()=>{

    return(<Container>
            <MainHeader/>
    <div>안녕하세요!</div>
    </Container>);
};

export default Background;