import MainHeader3 from "../components/part/MainHeader3";
import React from "react";
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
  background: rgba(0, 0, 0, 0.5); height:60.2%;
`;

const OptionList = styled.div`
  width:100%; height:465px; align-items: center; background-color:rgba(255,255,255);
  opacity: 0.8; position:absolute; margin-top: 35px;
`;

const FilterTitle = styled.p`
  font-size: 25px; font-weight: bold; text-align: center; display: flex;
  width:120px; height:40px; line-height: 10px; margin: 20px 0 0 289px;
`;
const NormalSearch = () => {
  return (
    <Container>
      <MainHeader3 />
      <Positioner>
        <MainSearchForm />
        <OptionList>
          <FilterTitle>검색 옵션</FilterTitle>
          <FilterTitle>우선 순위</FilterTitle>
          <FilterTitle>가격 필터</FilterTitle>
          <hr style={{ margin: '80px' }} />
        </OptionList>
      </Positioner>
    </Container>
  );
};
export default NormalSearch;