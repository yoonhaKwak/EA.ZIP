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
  /*   // 예시 파일로 띄우기 위한 코드 구간
    const [ItemList, SetItemList] = useState([]);
    useEffect(() => {
      axios.get("Gangnam15.json")
        .then((response) => {
          SetItemList(response.data);
        });
    }, []);
    console.log(ItemList); */
  const { state } = useLocation([]);
  const [manydata, setManyData] = useState([]);
  useEffect(() => {
    setManyData(state);
  })
  console.log(manydata);
  return (
    <Listblock><ListPage ItemList={manydata} /></Listblock>
  );
}

export default HomeList;
