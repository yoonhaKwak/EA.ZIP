
import MainHeader from "../components/part/MainHeader";
import React from "react";
import styled from "styled-components";


const Container=styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: url();
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