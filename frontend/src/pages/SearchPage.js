import SearchHeader from "../components/part/SearchHeader";
import React from "react";
import styled from "styled-components";
import HomeList from "../components/part/HomeList";
import Map from "../components/part/Map";
import '../styles/css/modal.css';
import pallette from "styles/pallette";


const Container = styled.div`
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
  return (
    <Container>
      <SearchHeader />

      <Body>
        <div className="left"><HomeList /></div>
        <div className="right"><Map /></div>l

      </Body>
    </Container>
  );
};
export default SearchPage;