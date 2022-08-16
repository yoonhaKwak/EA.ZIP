import MySearchHeader from "../components/part/MySearchHeader";
import React from "react";
import styled from "styled-components";
import MyHomeList from "../components/part/MyHomeList";
import pallette from "styles/pallette";
import MyKakaoMap from "API/MyKakaoMap";
import LoginForm from "./LoginForm";

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


const Mypage = () => {

  return (
    <>
      {
        sessionStorage.getItem('userId') ?
          <Container>
            <MySearchHeader />
            <Body>
              <div className="left" style={{ zindex: '50' }}>
                <MyHomeList />
              </div>
              <div className="right"><MyKakaoMap />
              </div>
            </Body>

          </Container>
          : (alert('로그인이 필요합니다'), window.history.back())
      }
    </>
  );
};
export default Mypage;