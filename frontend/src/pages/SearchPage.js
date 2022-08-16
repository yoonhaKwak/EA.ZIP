
import SearchHeader from "../components/part/SearchHeader";
import React, { Suspense, useEffect, useState } from "react";
import styled from "styled-components";
import HomeList from "../components/part/HomeList";
import pallette from "styles/pallette";
import Modal from "components/part/Modal";
import KakaoMap from "API/KakaoMap";
import { width } from "@mui/system";
import Loading from "./Loading";


const Container = styled.div`
justify-content: space-between;
-ms-user-select: none; 
-moz-user-select: -moz-none;
-khtml-user-select: none;
-webkit-user-select: none;
user-select: none;
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
`;
const Body = styled.div`
position: fixed;
display:fixed;
width:100%;
height:100%;

border-top:1px solid rgba(0,0,0,0.1);
.left{
  display:fixed;
  width:100%;

  min-width:508px;

max-width:508px;
height:93.9%;

float:left;
background-color:white;
overflow-y: auto;
    
    &::-webkit-scrollbar {
      width: 14px;
      height: 8px;
      border-radius: 6px;
      min-height: 10px;
  
    }
    &::-webkit-scrollbar-thumb {
      background: ${pallette.orange[0]};
      width: 8px;
      height: 8px;
      border-radius: 20px;
      background-clip: padding-box;
      border: 4px solid transparent;}
      
    
}
.right{
  display:fixed;
  min-width:1405px;
  width:100%;
  height:100%;
float:right;
background-color:white;


}
`;

const QuestionMark = styled.button`
  position:absolute; border:none; border-radius: 50px; background-color: ${pallette.orange[0]}; z-index:100; width:40px; height:40px;
  font-size:30px; color:white; margin-top: 10px; margin-left: 10px; cursor: pointer;
`;

const Balloon = styled.div`
 background-color: #e6e6e6; border: none; border-radius: 10px; color: black; font-size: 16px; font-weight: bold; height: 46px; letter-spacing: -0.25px;
  margin-top: 20px; margin-left: 100px; padding: 5px 11px; position: absolute; width: 300px; z-index: 100;
  ::after{
    border-color: #e6e6e6 transparent; border-style: solid; border-width: 15px 0 0 60px; content: ''; display: block; right: 300px;
  position: absolute; top: 0; width: 0; z-index: -1;
  }
`;

const { kakao } = window

const SearchPage = () => {
  let [modal, setModal] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive(current => !current);
  };

  const show = (event) => {
    setModal(event.target.value)
  }

  const buttonevent = () => {
    {
      setModal(true) && setTimeout(() => { setModal(false); }, 10000)
    }
  }
  return (
    <Container>
      <SearchHeader />
      <Body>
        <div className="left" style={{ zindex: '50' }}><HomeList />
        </div>

        <div className="right">
          <QuestionMark onClick={setTimeout(() => { setModal(false); }, 10000) && buttonevent} >?</QuestionMark>
          {/* if (modal === false) { setModal(true) } else { setModal(false) }  */}
          {
            modal === true ? <Balloon>선택한 편의시설에 대한 점수가 높은 순서대로 정렬되어있습니다.</Balloon> : null
          }
          <KakaoMap />
        </div>
      </Body>
    </Container>
  );
};
export default SearchPage;