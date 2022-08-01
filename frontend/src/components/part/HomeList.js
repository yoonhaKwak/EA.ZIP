import styled from "styled-components";
import pallette from "../../styles/pallette";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ListPage from "../detail/Listpage"
import { useLocation } from "react-router-dom";

const Listblock = styled.div`
    position:flex;
    background-color:white;
    left:0;
    height:100%;
    width:100%;

    `;

function HomeList() {

  const [ItemList, SetItemList] = useState([]);
  useEffect(() => {
    axios.get("Gangnam15.json")
      .then((response) => {
        SetItemList(response.data);
      });
  }, []);
  console.log(ItemList);
  /*   const { state } = useLocation([]);
    console.log(state); */
  return (
    <Listblock><ListPage ItemList={ItemList} /></Listblock>
  );
}

export default HomeList;
