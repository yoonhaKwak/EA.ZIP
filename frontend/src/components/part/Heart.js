import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import BlankHeart from "../../styles/img/Blank_Heart.svg";
import FillHeart from "../../styles/img/Fill_Heart.svg";







function Heart({ Id, value }) {


  /*-----------------------------------------------------------[Wla기능 만들거임]-------------------------------------------------------------------------------*/
  const [Wishadd, setWishadd] = useState(false)
  const [Wishcount, setWishcount] = useState(800)
  let userId = sessionStorage.userId;
  const wishAddHandler = () => {
    setWishadd(!Wishadd)
  }
  const wishCountHandler = () => {
    Id = Id + ""
    wishAddHandler()
    if (!Wishadd) {
      setWishcount(Wishcount + 1)
      axios({
        url: 'mypage/favorite',
        method: 'post',
        data: {
          'userId': userId,
          'idx': Id,
        },
        baseURL: 'http://localhost:8080'
      })
      console.log({
        'userId': userId,
        'productID': Id,
        '찜': "찜했슈"

      })

    } else if (Wishadd) {
      setWishcount(Wishcount - 1)
      axios({
        url: 'mypage/favorite',
        method: 'post',
        data: {
          'userId': userId,
          'idx': Id,
        },
        baseURL: 'http://localhost:8080'
      })
      console.log({
        'userId': userId,
        'product': Id,
        '찜': "찜 풀렸슈"

      })
    }
  }


  return (
    <HeartButton>
      <input type="checkbox" name="heart" id={Id} value={value} onClick={wishCountHandler} />
      <label htmlFor={Id}>
        <img src={BlankHeart} alt="" />
      </label>

    </HeartButton>
  );
}

export default Heart;

const HeartButton = styled.div`
  input{
    display:none;
  }
  label{
    width:32px;
    height:32px;
    cursor: pointer;
  }
input+label{
  content:url(${BlankHeart});
}
input:checked+label{
  content:url(${FillHeart});  
}
img{
  width:32px;
  height:32px;
  padding:0;
}
`;