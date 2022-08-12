import MainHeader3 from "../components/part/MainHeader3";
import styled from "styled-components";
import image from "../styles/background/2.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import MultiRangeSlider1 from "components/part/MultiRangeSlider1";
import TimeSectionSlider from "components/part/TimeSectionSlider";
import TransferSlider from "components/part/TransferSlider";
import pallette from 'styles/pallette';
import Search from '../styles/icons/Search.svg';

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
  width:170px; height:40px; line-height: 10px; margin: 0 45.54%; padding-top: 25px;
`;

const FilterTitle1 = styled.p`
  font-size: 20px; display: inline-block;
  width:auto; height:40px; line-height: 0px; margin: 0 20px 0px 20px; padding-top: 12px;
`;

const Hr = styled.hr`
  width: 260px; display: inline-block; vertical-align: middle;
`;

const Div = styled.div`
  width:450px; display: inline-block; margin:250px 95px 0 95px; z-index:11;
`;

const Sbtn = styled.button`
width:240px; height: 44px; border-radius: 20px; border: none; background-color: #FF9431; font-size: 25px;
  font-weight: bold; color: white; margin: 50px 20px 20px 820px;  display: absolute; cursor: pointer; padding:10px; line-height: 1px;
  &:hover{
    background-color: #D37E30;
  }
`;
const StyledBox = styled.form`
  position:flex;
  background-color:white;
  margin-left:550px;
  width: 50.6rem;
  height: 2.7rem;
  border-radius: 100px;
  border: solid 3px ${pallette.orange[0]};
  display: flex;
  justify-content: center;
  align-items: center; 
`;

const StyledInput = styled.input`
width: 46rem;
height: 2.5rem;
background-color:white;
font-size: 22px;
border: none;
:focus {
    outline: none;
    width:46rem;
  }
::placeholder{
  color: #c6c6c6;
}
`;
const Button = styled.button`
    display:flex;
    margin:2% 0 0 0;
    background-image:url(${Search}); 
    background-repeat: no-repeat;
    width: 35px;
    height: 35px;
    border:none;
    background-color: transparent;
`;

const SliderDBox = styled.div`
  display: flex; float:left; width:170px; height:52px; border: 1px solid #ff9431; border-radius: 15px; font-size:15px;
  padding-left: 20px; padding-top:7px;
`;

const Hr1 = styled.hr`
  display:flex; float:left; width: 30px; margin: 30px 15px; line-height:10px;
`;

//////////////////////////함수입력 구간//////////////////////////////////////////
const { kakao } = window

const TargetSearch = (onClick) => {

  const [map, setMap] = useState(0);
  const [mip, setMip] = useState(0);
  const [mal, setMal] = useState(0);
  const [mil, setMil] = useState(0);
  const [mam, setMam] = useState(0);
  const [mim, setMim] = useState(0);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  /////////////////////////////////////////////////숫자==> 시간으로////////////////////////////////////////////////////////
  Number.prototype.toHHMMSS = function () {
    let min_num = parseInt(this, 10);
    let hours = Math.floor(min_num / 60);
    let minutes = Math.floor(min_num);

    if (hours < 10) { hours = hours; }
    if (minutes > 60) { minutes = minutes - 60; }
    if (minutes === 60) { minutes = 0; }
    return hours + '  시간   ' + minutes + ' 분  ';
  }
  /////////////////////////////////////////////////숫자==> 시간으로////////////////////////////////////////////////////////

  const [target, setTarget] = useState({
    center: { lat: 0, lng: 0 },
    isPanto: true,
  });
  const [searchAddress, SetSearchAddress] = useState();

  const SearchMap = () => {
    const ps = new kakao.maps.services.Places()
    const placesSearchCB = function (data, status) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0]
        setTarget({
          center: { lat: newSearch.y, lng: newSearch.x }
        })
      }
    };
    ps.keywordSearch(`${searchAddress}`, placesSearchCB);
  }
  const handlekeypress = e => {
    if (e.key === 'Enter') {
      SearchMap();
      e.preventDefault();
    }
  }
  const handleSearchAddress = (e) => {
    SetSearchAddress(e.target.value)
  }
  let getLatLng = target.center;
  let Dest = searchAddress;

  const NextPage = () => {
    navigate('/normalsearch1', {
      state: {
        search: getLatLng,
        minTime: mip,
        maxTime: map,
        minWalk: mil,
        maxWalk: mal,
        minTrans: mim,
        maxTrans: mam,
        destination: searchAddress
      }
    });
  };

  return (
    <Container>
      <MainHeader3 />
      <Positioner>
        <p style={{ paddingLeft: '760px', color: 'white', fontSize: '30px', marginTop: '0px', fontWeight: 'bold' }}>"나에게 딱 맞는 집을 찾아보세요!"</p>
        <div />
        <form>
          <>
            <StyledBox className="inputForm">
              <Button type="button" onClick={onClick} />
              <StyledInput type="text" placeholder="목적지를 입력한 후 엔터를 누르세요!" onChange={handleSearchAddress} onKeyPress={handlekeypress} />
            </StyledBox>
          </>
          <OptionList>
            <FilterTitle>지역추천 옵션</FilterTitle>
            <Hr /><FilterTitle1>소요시간</FilterTitle1>
            <Hr style={{ width: '510px' }} /><FilterTitle1>도보시간</FilterTitle1>
            <Hr style={{ width: '520px' }} /><FilterTitle1>환승횟수</FilterTitle1><Hr style={{ width: '260px' }} />

          </OptionList>
          <Div>
            {/* 소요시간 구간 */}
            <TimeSectionSlider
              min={0}
              max={120}
              onChange={({ min, max }) => setMip(min) & setMap(max)}

            />
            <SliderDBox>최소 시간 <br />{(mip).toHHMMSS()}</SliderDBox>
            <Hr1 />
            <SliderDBox>최대 시간<br />{(map).toHHMMSS()}</SliderDBox>
          </Div>
          <Div>
            {/* 도보시간 구간 */}
            <MultiRangeSlider1
              min={0}
              max={60}
              onChange={({ min, max }) => setMil(min) & setMal(max)}
            />
            <SliderDBox>최소 시간 <br />{(mil).toHHMMSS()}</SliderDBox>
            <Hr1 />
            <SliderDBox>최대 시간 <br />{(mal).toHHMMSS()}</SliderDBox>
          </Div>
          <Div>
            {/* 환승횟수 구간 */}
            <TransferSlider
              min={0}
              max={3}
              onChange={({ min, max }) => setMim(min) & setMam(max)}
            />
            <SliderDBox>최소 횟수 <br />{mim} 번</SliderDBox>
            <Hr1 />
            <SliderDBox>최대 횟수 <br />{mam} 번</SliderDBox>
          </Div>
          <code>
            {JSON.stringify({ data: { getLatLng, Dest, mip, map, mil, mal, mim, mam } })}
          </code>
        </form>
        <Sbtn onClick={() => {
          NextPage()
        }}>
          우선순위 정하기
        </Sbtn>
      </Positioner>
    </Container>
  );
};

export default TargetSearch;
