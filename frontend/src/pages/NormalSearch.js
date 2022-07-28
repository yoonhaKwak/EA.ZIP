import MainHeader3 from "../components/part/MainHeader3";
import styled from "styled-components";
import image from "../styles/background/2.jpg";
import MainSearchForm from "../components/detail/MainSearchForm";
import CheckBox from "../components/part/CheckBox";
import axios from "axios";
import { Link, useNavigate, Navigate } from "react-router-dom";
import React, { useState } from "react";
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
  &:hover{
    background-color: #D37E30;
  }
`;

const optionsList = [
  { id: 0, name: 'option', text: "편의점", value: 'sc_market' },
  { id: 1, name: 'option', text: "병원", value: 'sc_hospital' },
  { id: 2, name: 'option', text: "지하철역", value: 'sc_subway' },
  { id: 3, name: 'option', text: "카페", value: 'sc_cafe' },
  { id: 4, name: 'option', text: "주민센터", value: 'sc_office' },
  { id: 5, name: 'option', text: "버스 정류장", value: 'sc_bus' },
  { id: 6, name: 'option', text: "세탁소", value: 'sc_laundry' },
  { id: 7, name: 'option', text: "우체국", value: 'sc_post' },
  { id: 8, name: 'option', text: "버스 터미널" },
  { id: 9, name: 'option', text: "보건소", value: 'sc_bogun' },
  { id: 10, name: 'option', text: "따릉이대여소", value: 'sc_ddar' },
  { id: 11, name: 'option', text: "은행", value: 'sc_bank' },
  { id: 12, name: 'option', text: "CCTV", value: 'sc_cctv' }
];
const CategoryList = [
  { id: 0, name: 'type', text: "월세", value: 3 },
  { id: 1, name: 'type', text: "전세", value: 2 },
  { id: 2, name: 'type', text: "매매", value: 1 }
];
const CategoryList1 = [


  { id: 0, name: 'category', text: '주택', value: 1 },
  { id: 1, name: 'category', text: '빌라', value: 2 },
  { id: 2, name: 'category', text: '오피스텔', value: 3 }

];
const CategoryList2 = [

  { id: 0, name: 'room', text: '원룸', value: 1 },
  { id: 1, name: 'room', text: '투룸', value: 2 },
  { id: 2, name: 'room', text: '쓰리룸', value: 3 }
];

const NormalSearch = () => {
  const [category1, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [room_number, setRoom] = useState([]);
  const [options, setOption] = useState([]);
  const [map, setMap] = useState(0);
  const [mip, setMip] = useState(0);
  const [mam, setMam] = useState(0);
  const [mim, setMim] = useState(0);
  const [data, setData] = useState(null);
  // const [op1, setOp1] = useState()
  // const [op2, setOp2] = useState()
  // const [op3, setOp3] = useState()
  const navigate = useNavigate();

  const onCateElement = (checked, item) => {
    if (checked) {
      setCategory([...category1, item]);
    } else if (!checked) {
      setCategory(category1.filter(el => el !== item));
    }
  };
  const onTypeElement = (checked, item) => {
    if (checked) {
      setType([...type, item]);
    } else if (!checked) {
      setType(type.filter(el => el !== item));
    }
  };

  const onRoomElement = (checked, item) => {
    if (checked) {
      setRoom([...room_number, item]);
    } else if (!checked) {
      setRoom(room_number.filter(el => el !== item));
    }
  };
  const onOptionElement = (checked, item) => {
    if (checked) {
      setOption([...options, item]);
    } else if (!checked) {
      setOption(options.filter(el => el !== item));
    }
  };
  const Back = async () => {
    axios({
      method: 'post',
      url: '/react/filter',
      data: {
        "map": map,
        "mip": mip,
        "mam": mam,
        "mim": mim,
        "category": category1.toString(),
        "type": type.toString(),
        "room": room_number.toString(),
        "op1": options[0].toString(),
        "op2": options[1].toString(),
        "op3": options[2].toString()



        // "op1" : op1,
        // "op2" : op2,
        // "op3" : op3,
      },
      baseURL: 'http://localhost:8080'
    }
    ).then(response => setData(JSON.stringify(response.data)))
    //   .then(navigate('/search', { state: data }));
    // navigate(`/search`, { state: data });
  };
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
          <DivA style={{ marginRight: '140px', marginLeft: '166px' }}>
            {CategoryList.map((item) => (
              <ButtonA key={item.id} text={item.text} value={item.value}

                onChange={e => {
                  onTypeElement(e.target.checked, e.target.value);
                }}
                checked={type.includes(item.value) ? true : false}

              />
            ))}
            <div />
            {CategoryList1.map((item) => (
              <ButtonB key={item.id} text={item.text} value={item.value}

                onChange={e => {
                  onCateElement(e.target.checked, e.target.value);
                }}
                checked={category1.includes(item.value) ? true : false}


              />
            ))}
            <div />
            {CategoryList2.map((item) => (
              <ButtonC key={item.id} text={item.text} value={item.value}
                onChange={e => {
                  onRoomElement(e.target.checked, e.target.value);
                }}
                checked={room_number.includes(item.value) ? true : false}


              />
            ))}
          </DivA>
          <Div>
            {optionsList.map((item) => (
              <CheckBox key={item.id} text={item.text} value={item.value}

                onChange={e => {
                  onOptionElement(e.target.checked, e.target.value);
                }}
                checked={options.includes(item.value) ? true : false}



              />
            ))}
          </Div>
          <Div>

            <p className="price">매매/전세/보증금</p>
            <MultiRangeSlider
              min={0}
              max={50000}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`) & setMip(min) & setMap(max)}

            />
            <p className="monthly">월세</p>
            <MultiRangeSlider
              min={0}
              max={50000}
              onChange={({ min, max }) => console.log(`min = ${min}, max = ${max}`) & setMim(min) & setMam(max)}
            />
          </Div>

        </form>
        <button onClick={Back}>
          추천받기
        </button>
        <div style={{ zIndex: '110px' }}>결과:{data}</div>
        <code>
          {JSON.stringify({ data: { map, mip, mam, mim, category1, type, room_number, options } })}
        </code>
      </Positioner>
    </Container>
  );
};

export default NormalSearch;