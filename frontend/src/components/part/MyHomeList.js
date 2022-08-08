import styled from "styled-components";
import pallette from "../../styles/pallette";
import React, { useEffect, useState } from "react";
import axios from "axios";
import MyListpage from "../detail/MyListpage"
import { useLocation } from "react-router-dom";

const Listblock = styled.div`
    position:flex;
    background-color:white;
    left:0;
    height:100%;
    width:100%;

    `;

function MyHomeList() {

  const [ItemList, SetItemList] = useState();
  useEffect(() => {
    axios.get("http://localhost:8080/getfavorite")
      .then((response) => {
        SetItemList(response.data);
        console.log(response.data);
      });
  }, []);
  console.log(ItemList);
  // const { state } = useLocation([]);
  // console.log(state);
  return (
    <Listblock><MyListpage ItemList={ItemList} /></Listblock>
  );
}

export default MyHomeList;
