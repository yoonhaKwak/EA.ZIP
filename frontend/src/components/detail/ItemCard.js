import React from "react";
import styled from "styled-components";
import DefaultImg from "../../styles/img/DefaultHomeImg.svg";
const Table=styled.div`
    width:505px;
    height:278px;
    background-color:white;
    .left{
        display:fixed;
        float:left;
        width:258px;
        height:278px;
    }
    .right{
        display:fixed;
        width:247px;
        height:278px;
        float: right;
    }
`;
const ImageTable=styled.div`

    display:fixed;
    width:238px;
    height:238px;
`;

const Image=({이미지주소})=>{
    if(이미지주소[0]=null){
        return(<img src={DefaultImg} alt=""/>);
    }else{
        return(<img src={이미지주소[0]} alt=""/>)
    }
 
}
// 0:월세 ,1:매매, 2:전세
function ItemCard({이미지주소,매물거래구분,신주소,해당층수,공급면적,전용면적,특징광고내용,매매가,전세가,월세가}){
    return(
        <Table>
            <div className="left"><Image/></div>
        </Table>

    );
}

export default ItemCard;