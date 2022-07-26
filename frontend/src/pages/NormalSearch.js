import MainHeader3 from "../components/part/MainHeader3";
import React, { useState } from "react";
import styled from "styled-components";
import image from "../styles/background/2.jpg";
import MainSearchForm from "../components/detail/MainSearchForm";
import CheckBox from "../components/part/CheckBox";
import axios from "axios";
import MultiRangeSlider from "components/part/MultiRangeSlider";
import { Link } from "react-router-dom";

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
  { id: 0, text: "편의점", value: 'market' },
  { id: 1, text: "병원", value: 'hospital' },
  { id: 2, text: "지하철역", value: 'subway' },
  { id: 3, text: "카페", value: 'cafe' },
  { id: 4, text: "주민센터", value: 'office' },
  { id: 5, text: "버스 정류장", value: 'bus' },
  { id: 6, text: "세탁소", value: 'laundry' },
  { id: 7, text: "우체국", value: 'post' },
  { id: 8, text: "버스 터미널" },
  { id: 9, text: "보건소", value: 'bogun' },
  { id: 10, text: "따릉이대여소", value: 'ddar' },
  { id: 11, text: "은행", value: 'bank' },
  { id: 12, text: "CCTV", value: 'cctv' }
];

const NormalSearch = () => {

  const CategoryList = [
    { id: 0, name: '월세', value: '3' },
    { id: 1, name: '전세', value: '2' },
    { id: 2, name: '매매', value: '1' }
  ];
  const CategoryList1 = [

    { id: 0, name: '주택', value: '주택' },
    { id: 1, name: '빌라', value: '빌라' },
    { id: 2, name: '오피스텔', value: '오피스텔' }
  ];
  const CategoryList2 = [

    { id: 0, name: '원룸', value: '1' },
    { id: 1, name: '투룸', value: '2' },
    { id: 2, name: '쓰리룸', value: '3' }
  ];

  const formData = [
    { id: 1, name: "딸기" },
    { id: 2, name: "바나나" },
    { id: 3, name: "피자" },
    { id: 4, name: "불고기" },
    { id: 5, name: "김치" },
    { id: 6, name: "볶음밥" },
    { id: 7, name: "쌀국수" },
    { id: 8, name: "육개장" },
    { id: 9, name: "커피" }
  ]

  const [isToggle, setIsToggle] = useState(false);
  const [checkedItems, setCheckedItems] = useState(new Set());

  const checkHandler = ({ target }) => {
    setIsToggle(!isToggle);
    checkedItemHandler(target.parentNode, target.value, target.checked);
    console.log(target.parentNode, target.value, target.checked);
  };

  const checkedItemHandler = (box, id, isToggle) => {
    if (isToggle) {
      checkedItems.add(id);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = "#FF7B31";
      box.style.color = "#E8E8E8";
    } else if (!isToggle && checkedItems.has(id)) {
      checkedItems.delete(id);
      setCheckedItems(checkedItems);
      box.style.backgroundColor = "#E8E8E8";
      box.style.color = "#FF7B31";
    }
    console.log(checkedItems);
    return checkedItems;
  };

  const [price, setPrice] = useState(50000);
  const [minMonthly, setMinMonthly] = useState(0);

  const getData = (min) => {
    setMinMonthly(min);
  }
  const [category, setCategory] = useState("오피스텔");
  const [type, setType] = useState(1);
  const [room, setRoom] = useState(1);
  const [data, setData] = useState(null);

  const Back = async () => {
    axios({
      method: 'post',
      url: '/react/filter',
      data: {
        "price": price,
        "category": category,
        "type": type,
        "room": room,
        "monthly": minMonthly
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
          <Div style={{ marginRight: '42px', marginLeft: '166px' }}>
            {CategoryList.map((item) => {
              return (
                <Tbtn>{item.name}</Tbtn>

              )
            })}
            <div />
            {CategoryList1.map(item1 => {
              return (
                <Mbtn>{item1.name}</Mbtn>
              )
            })}
            <div />
            {CategoryList2.map(item2 => {
              return (
                <Bbtn>{item2.name}</Bbtn>
              )
            })}
          </Div>
          <Div>
            {optionsList.map((item) => (
              <CheckBox key={item.id} text={item.text} />
            ))}
          </Div>
          <Div>
            <p>매매/전세/보증금</p>
            <MultiRangeSlider
              min={minMonthly}
              max={5000000000}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            />
            <p>월세</p>
            <MultiRangeSlider
              min={0}
              max={10000000}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`)}
            //부모에서 자식으로 접근하는 방법을 찾아보기.
            />
          </Div>
          <Sbtn>추천받기</Sbtn>
        </form>
        <button onClick={Back}>결과받기</button>
        <div style={{ zIndex: '110px' }}>결과결과:{data}</div>
      </Positioner>
    </Container>
  );
};
export default NormalSearch;