import MainHeader from "../components/part/MainHeader";
import React from "react";
import styled from "styled-components";



const Container=styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-image: url(https://source.unsplash.com/random/1920x1080);
background-size: cover;
`;

const SamplePage = () => {
  return (
<Container>
    <MainHeader/>
    <div>안녕하세요!</div>
    </Container>
  );
};
export default SamplePage;