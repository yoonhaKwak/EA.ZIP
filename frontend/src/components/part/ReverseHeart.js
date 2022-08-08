import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import BlankHeart from "../../styles/img/Blank_Heart.svg";
import FillHeart from "../../styles/img/Fill_Heart.svg";







function ReverseHeart({ Id, value }) {


  /*-----------------------------------------------------------[Wla기능 만들거임]-------------------------------------------------------------------------------*/
  const [Wishadd, setWishadd] = useState(true)
  const [Wishcount, setWishcount] = useState(800)

  const wishAddHandler = () => {
    setWishadd(!Wishadd)
  }
  const wishCountHandler = () => {
    Id = Id + ""
    wishAddHandler()
    if (!Wishadd) {
      setWishcount(Wishcount + 1)
      axios({
        url: '/favorite',
        method: 'post',
        data: {
          'idx': Id,
        },
        baseURL: 'http://localhost:8080'
      })
      console.log({
        'productID': Id,
        '찜': "찜했슈"

      })

    } else if (Wishadd) {
      setWishcount(Wishcount - 1)
      axios({
        url: '/favorite',
        method: 'post',
        data: {
          'idx': Id,
        },
        baseURL: 'http://localhost:8080'
      })
      console.log({
        'product': Id,
        '찜': "찜 풀렸슈"

      })
    }
  }


  return (
    <HeartButton>
      <input type="checkbox" name="heart" id={Id} value={value} onClick={wishCountHandler} />
      <label htmlFor={Id}><img src={FillHeart} alt="" /></label>

    </HeartButton>
  );
}

export default ReverseHeart;

const HeartButton = styled.div`
  input{
    display:none;
  }
  label{
    width:32px;
    height:32px;
  }
input+label{
  content:url(${FillHeart});
}
input:checked+label{
  content:url(${BlankHeart});  
}
img{
  width:32px;
  height:32px;
  padding:0;
}
`;