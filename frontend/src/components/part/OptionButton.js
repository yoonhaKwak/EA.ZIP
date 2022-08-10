import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import cafeon from "../../styles/icons/locate/CafeOn.svg";
import cafeoff from "../../styles/icons/locate/CafeOff.svg";

function OptionButton({ Id, value }) {


    /*-----------------------------------------------------------[Wla기능 만들거임]-------------------------------------------------------------------------------*/
    /*  const [Wishadd, setWishadd] = useState(false)
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
                 url: '/history',
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
                 url: '/history',
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
  */

    return (
        <Button>
            {/*             <input type="checkbox" name="heart" id={Id} value={Aalue} onClick={wishCountHandler} />
            <label htmlFor={Id}><img src={FillHeart} alt="" /></label>
 */}
            <input type="checkbox" name="test" id={Id} value={value} />
            <label htmlFor={Id}><img src={test} alt="" /></label>
        </Button>
    );
}

export default OptionButton;

const Button = styled.div`
    input{
      display:none;
    }
    label{
      width:32px;
      height:32px;
    }
  input+label{
    content:url(${cafeoff});
  }
  input:checked+label{
    content:url(${cafeon});  
  }
  img{
    width:32px;
    height:32px;
    padding:0;
  }
  `;