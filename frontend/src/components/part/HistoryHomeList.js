import styled from "styled-components";
import pallette from "../../styles/pallette";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Listpage from "../detail/Listpage"
import { useLocation } from "react-router-dom";

const Listblock = styled.div`
    position:flex;
    background-color:white;
    left:0;
    height:100%;
    width:100%;

    `;

function MyHomeList() {
    let userId = sessionStorage.getItem("userId");
    const [ItemList, SetItemList] = useState();
    const [idx, setIdx] = useState([]);
    useEffect(() => {
        axios({
            url: "/mypage/gethistory",
            method: 'post',
            data:
            {
                'userId': userId
            },
            baseURL: 'http://localhost:8080'
        }
        ).then((response) => {
            SetItemList(response.data);
        });
    }, []);
    console.log(ItemList);
    return (
        <Listblock><Listpage ItemList={ItemList} /></Listblock>
    );
}

export default MyHomeList;
