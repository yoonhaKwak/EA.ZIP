import MainHeader3 from "../components/part/MainHeader3";
import React, { useState } from "react";
import styled from "styled-components";
import image from "../styles/background/2.jpg";
import MainSearchForm from "../components/detail/MainSearchForm";


const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-image:url(${image});
background-repeat: no-repeat;
background-size: cover;
`;

const Positioner = styled.div`
  position: absolute; justify-content: center; align-items: center; width: 100%; padding-top: 300px;
  background: rgba(0, 0, 0, 0.5); height:60.8%; z-index: 1;
`;

const OptionList = styled.div`
  width:100%; height:465px; align-items: center; background-color:rgba(255,255,255);
   position:absolute; margin-top: 35px; opacity: 0.8; z-index:-1;
`;

const FilterTitle = styled.p`
  font-size: 25px; font-weight: bold; display: inline-block;
  width:120px; height:40px; line-height: 10px; margin: 0 248px 0px 262px; padding-top: 25px;
`;
const FilterTitle1 = styled.p`
  font-size: 16px; display: inline-block;
  width:auto; height:40px; line-height: 0px; margin: 0 20px 0px 20px; padding-top: 12px;
`;
const Hr = styled.hr`
  width: 282px; display: inline-block; vertical-align: middle;
`;

const Div = styled.div`
  width:550px; display: inline-block; margin: 180px 0 0 58px; text-align: -webkit-auto; z-index:11;
`;
const Tbtn = styled.button`
  width:auto; height: 44px; border-radius: 20px; border: 3px solid #FF7B31; background-color: #E8E8E8; font-size: 23px;
  font-weight: bold; color: #FF7B31; margin-right: 20px; margin-bottom:50px; display: absolute; cursor: pointer; padding:10px; line-height: 1px;
`;

const Mbtn = styled.button`
  width:auto; height: 44px; border-radius: 20px; border: 3px solid #FF9431; background-color: #E8E8E8; font-size: 23px;
  font-weight: bold; color: #FF9431; margin-right: 20px; margin-bottom:50px; display: absolute; cursor: pointer; padding:10px; line-height: 1px;
`;

const Bbtn = styled.button`
  width:auto; height: 44px; border-radius: 20px; border: 3px solid #FFAD31; background-color: #E8E8E8; font-size: 23px;
  font-weight: bold; color: #FFAD31; margin-right: 20px; margin-bottom:50px; display: absolute; cursor: pointer; padding:10px; line-height: 1px;
`;
const NormalSearch = () => {

  return (
    <Container>
      <MainHeader3 />
      <Positioner>
        <MainSearchForm />
        <OptionList>
          <FilterTitle>?????? ??????</FilterTitle>
          <FilterTitle>?????? ??????</FilterTitle>
          <FilterTitle>?????? ??????</FilterTitle>
          <Hr /><FilterTitle1>??????</FilterTitle1>
          <Hr style={{ width: '492px' }} /><FilterTitle1>???????????? ??? ????????????</FilterTitle1>
          <Hr style={{ width: '472px' }} /><FilterTitle1>?????? ??????</FilterTitle1><Hr style={{ width: '275px' }} />
        </OptionList>
        <Div>
          <Tbtn>??????</Tbtn>
          <Tbtn>??????</Tbtn>
          <Tbtn>??????</Tbtn>
          <div />
          <Mbtn>??????</Mbtn>
          <Mbtn>??????</Mbtn>
          <Mbtn>??????</Mbtn>
          <Mbtn>????????????</Mbtn>
          <div />
          <Bbtn>??????</Bbtn>
          <Bbtn>??????</Bbtn>
          <Bbtn>??????</Bbtn>
          <Bbtn>?????????</Bbtn>
        </Div>
        <Div>

        </Div>
        <Div>??????/??????/?????????</Div>
      </Positioner>
    </Container>
  );
};
export default NormalSearch;