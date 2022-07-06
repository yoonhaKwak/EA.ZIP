import SearchHeader from "../components/part/SearchHeader";
import React, { useState } from "react";
import styled from "styled-components";
import HomeList from "../components/part/HomeList";
import Map from "../components/part/Map";
import '../styles/css/modal.css';
import pallette from "styles/pallette";
import Modal from "components/part/Modal";

const RemoteButton = styled.button`
  font-size: 20px; border: solid 3px ${pallette.orange[0]}; border-radius: 20px; font-weight: bold; margin: 15px 18px;
  z-index: 100; position: absolute; width:116px; height:47px; background-color:white; color:#FF9431; cursor: pointer;
`;

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


const SearchPage = () => {
  let [modal, setModal] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(current => !current);
  };

  return (
    <Container>
      <SearchHeader />

      <Body>
        <div className="left"><HomeList /></div>
        <div className="right"><Map />
          <RemoteButton
            style={{
              backgroundColor: isActive ? 'white' : '',
              color: isActive ? '#FF9431' : ''
            }}
            onClick={(handleClick) => { setModal(!modal) }} >필터 목록</RemoteButton>
          {
            modal === true ? <Modal /> : null
          }
        </div>

      </Body>
    </Container>
  );
};
export default SearchPage;