import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";









function OptionButton({ Id, value, A, B }) {


  /*-----------------------------------------------------------[Wla기능 만들거임]-------------------------------------------------------------------------------*/
  /* const [Wishadd, setWishadd] = useState(false)
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
  } */

  const AA = A;
  const BB = B;
  const Cafe = styled.div`
  input{
    display:none;
  }

  label{

    cursor: pointer;
  }
input+label{
  content:url(${BB})
}
input:checked+label{
  content:url(${AA})
}
img{

  padding:0;
}
`;
  return (

    <Cafe>
      <input type="checkbox" id={Id} value={value} A={A} B={B} />
      <label htmlFor={Id} AA={AA} BB={BB}><img src={BB} alt="" /></label>


    </Cafe>

  );
}

export default OptionButton;

