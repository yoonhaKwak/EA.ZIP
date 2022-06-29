import SearchHeader from "../components/part/SearchHeader";
import React from "react";
import styled from "styled-components";
import HomeList from "../components/part/HomeList";
import Map from "../components/part/Map";
import '../styles/css/modal.css';

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
.left{
  display:fixed;
  width:26%;
min-width:505px;
height:100%;
float:left;
background-color:red;
}
.right{
  display:fixed;
  min-width:1405px;
  width:74%;
  height:100%;
float:right;
background-color:blue;

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