import MainHeader3 from "../components/part/MainHeader3";
import styled from "styled-components";
import image from "../styles/background/2.jpg";
import MainSearchForm from "../components/detail/MainSearchForm";
import CheckBox from "../components/part/CheckBox";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useCallback, useEffect, useState, useRef } from "react";
import MultiRangeSlider from "components/part/MultiRangeSlider";
import ButtonA from "../components/part/ButtonA";
import ButtonB from "../components/part/ButtonB";
import ButtonC from "../components/part/ButtonC";

const Container = styled.div`
position: absolute;
width: 100%;
height: 100%;
background-image:url(${image});
background-repeat: no-repeat;
background-size: cover;
`;

const Positioner = styled.div`
  position: absolute; justify-content: center; align-items: center; width: 100%; padding-top: 185px;
  background: rgba(0, 0, 0, 0.5); height: 73.2%; z-index: 1;
`;

const OptionList = styled.div`
  width:100%; height:465px; align-items: center; background-color:rgba(255,255,255);
   position:absolute; opacity: 0.8; z-index:-1; margin-top: 79px;
`;

const FilterTitle = styled.p`
  font-size: 25px; font-weight: bold; display: inline-block;
  width:120px; height:40px; line-height: 10px; margin: 0 248px 0px 262px; padding-top: 25px;
`;
const FilterTitle1 = styled.p`
  font-size: 16px; display: inline-block;
  width:auto; height:40px; line-height: 0px; margin: 0 20px 0px 20px; padding-top: 12px;
`;
const Hr = styled.hr`
  width: 282px; display: inline-block; vertical-align: middle;
`;

const Div = styled.div`
  width:450px; display: inline-block; margin: 186px 110px -35px 61px; text-align: -webkit-auto; z-index:11;
`;

const DivA = styled.div`
  width:auto; display: inline-block; margin: 186px 110px -35px 61px; text-align: -webkit-auto; z-index:11;

`;


const Tbtn = styled.button`
    width: auto; height: 44px; border-radius: 20px; border: 3px solid #FF7B31; background-color: #E8E8E8;
    font-size: 23px; font-weight: bold; color: #FF7B31; margin-right: 20px; margin-bottom: 50px;
    display: absolute; cursor: pointer; padding: 10px; line-height: 1px;
`;
// 배경색: #E8E8E8
// 글자색: #FF7B31

const Mbtn = styled.button`
  width:auto; height: 44px; border-radius: 20px; border: 3px solid #FF9431; background-color: #E8E8E8; font-size: 23px;
  font-weight: bold; color: #FF9431; margin-right: 20px; margin-bottom:50px; display: absolute; cursor: pointer; padding:10px; line-height: 1px;
`;
// 배경색: #E8E8E8
// 글자색: #FF9431
const Bbtn = styled.button`
  width:auto; height: 44px; border-radius: 20px; border: 3px solid #FFAD31; background-color: #E8E8E8; font-size: 23px;
  font-weight: bold; color: #FFAD31; margin-right: 20px; margin-bottom:50px; display: absolute; cursor: pointer; padding:10px; line-height: 1px;
`;
// 배경색: #E8E8E8
// 글자색: #FFAD31
const Sbtn = styled.button`
width:240px; height: 44px; border-radius: 20px; border: none; background-color: #FF9431; font-size: 25px;
  font-weight: bold; color: white; margin: 10px 20px 20px 820px;  display: absolute; cursor: pointer; padding:10px; line-height: 1px;
`;

const optionsList = [
  { id: 0, text: "편의점", value: 'sc_market' },
  { id: 1, text: "병원", value: 'sc_hospital' },
  { id: 2, text: "지하철역", value: 'sc_subway' },
  { id: 3, text: "카페", value: 'sc_cafe' },
  { id: 4, text: "주민센터", value: 'sc_office' },
  { id: 5, text: "버스 정류장", value: 'sc_bus' },
  { id: 6, text: "세탁소", value: 'sc_laundry' },
  { id: 7, text: "우체국", value: 'sc_post' },
  { id: 8, text: "버스 터미널" },
  { id: 9, text: "보건소", value: 'sc_bogun' },
  { id: 10, text: "따릉이대여소", value: 'sc_ddar' },
  { id: 11, text: "은행", value: 'sc_bank' },
  { id: 12, text: "CCTV", value: 'sc_cctv' }
];
const CategoryList = [
  { id: 0, text: "월세", value: '3' },
  { id: 1, text: "전세", value: '2' },
  { id: 2, text: "매매", value: '1' }
];
const CategoryList1 = [

  { id: 0, text: '주택', value: '주택' },
  { id: 1, text: '빌라', value: '빌라' },
  { id: 2, text: '오피스텔', value: '오피스텔' }
];
const CategoryList2 = [

  { id: 0, text: '원룸', value: '1' },
  { id: 1, text: '투룸', value: '2' },
  { id: 2, text: '쓰리룸', value: '3' }
];

const NormalSearch = () => {

  const [type, setType] = useState(1);
  const [category, setCategory] = useState("빌라/연립");
  const [room, setRoom] = useState(1);
  const [map, setMap] = useState(50000);
  const [mip, setMip] = useState(100);
  //전세/매매/보증금 구간
  const [mam, setMam] = useState(0);
  const [mim, setMim] = useState(0);
  //월세 구간

  const [data, setData] = useState(null);
  // const [op1, setOp1] = useState()
  // const [op2, setOp2] = useState()
  // const [op3, setOp3] = useState()

  const navigate = useNavigate();

  const Back = async () => {
    axios({
      method: 'post',
      url: '/react/filter',
      data: {
        "map": map,
        "mip": mip,
        "mam": mam,
        "mim": mim,
        "category": category,
        "type": type,
        "room": room
        // "op1" : op1,
        // "op2" : op2,
        // "op3" : op3,
      },
      baseURL: 'http://localhost:8080'
    }
    ).then(response => setData(JSON.stringify(response.data)))
  }

  return (
    <Container>
      <MainHeader3 />
      <Positioner>
        <p style={{ paddingLeft: '760px', color: 'white', fontSize: '30px', marginTop: '0px', fontWeight: 'bold' }}>"나에게 딱 맞는 집을 찾아보세요!"</p>
        <div />
        <MainSearchForm />
        <form>
          <OptionList>
            <FilterTitle>검색 옵션</FilterTitle>
            <FilterTitle>우선 순위</FilterTitle>
            <FilterTitle>가격 필터</FilterTitle>
            <Hr /><FilterTitle1>유형</FilterTitle1>
            <Hr style={{ width: '492px' }} /><FilterTitle1>편의시설 및 교통시설</FilterTitle1>
            <Hr style={{ width: '472px' }} /><FilterTitle1>가격 범위</FilterTitle1><Hr style={{ width: '275px' }} />
          </OptionList>
          <DivA style={{ marginRight: '200px', marginLeft: '166px' }}>
            {CategoryList.map((item) => (
              <ButtonA key={item.id} text={item.text} />
            ))}
            <br />
            {CategoryList1.map((item) => (
              <ButtonB key={item.id} text={item.text} />
            ))}
            <br />
            {CategoryList2.map((item) => (
              <ButtonC key={item.id} text={item.text} />
            ))}
          </DivA>
          <Div>
            {optionsList.map((item) => (
              <CheckBox key={item.id} text={item.text} />
            ))}
          </Div>
          <Div>
            <p>매매/전세/보증금</p>
            <MultiRangeSlider
              min={0}
              max={100}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
            <p>월세</p>
            <MultiRangeSlider
              min={0}
              max={100}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            //부모에서 자식으로 접근하는 방법을 찾아보기.
            />
          </Div>
          <Sbtn>추천받기</Sbtn>
        </form>
        <button onClick={Back}>결과받기</button>
        {/* <div style={{ zIndex: '110px' }}>결과:{data}</div> */}
        <code>
          {JSON.stringify({ data })}
        </code>
      </Positioner>
    </Container>
  );
};

export default NormalSearch;