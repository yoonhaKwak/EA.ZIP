import "focus-visible";
import React from 'react';
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import MapCheckBox from "./MapCheckBox";
import MapMultiRangeSlider from "./MapMultiRangeSlider";
import GlobalStyles from "../detail/GlobalStyles";

//필터목록
const roomKind = [
  { id: 0, text: "원룸" },
  { id: 1, text: "투룸" },
  { id: 2, text: "쓰리룸" },
  { id: 3, text: "주택" },
  { id: 4, text: "빌라" },
  { id: 5, text: "오피스텔" }
];
const tradeType = [
  { id: 0, text: "월세" },
  { id: 1, text: "전세" },
  { id: 2, text: "매매" }
];
const Options = [
  { id: 0, text: "편의점" },
  { id: 1, text: "병원" },
  { id: 2, text: "지하철역" },
  { id: 3, text: "카페" },
  { id: 4, text: "주민센터" },
  { id: 5, text: "버스 정류장" },
  { id: 6, text: "세탁소" },
  { id: 7, text: "우체국" },
  { id: 8, text: "버스 터미널" },
  { id: 9, text: "보건소" },
  { id: 10, text: "따릉이대여소" },
  { id: 11, text: "은행" },
  { id: 12, text: "CCTV" }
];


// Styled-Component로 TabMenu 컴포넌트의 CSS 구현
const STabs = styled(Tabs)`
  font-size: 16px;
  width: 395px;
  height: 579px;
  position: absolute;
  margin: 62px 20px;
  z-index: 102;
  line-height:4px;
`;

const STabList = styled(TabList)`
  list-style-type: none;
  display: flex;
  padding: 0px;
  font-weight: 500;
  margin-top:0px;
`;
STabList.tabsRole = 'TabList';

const STab = styled(Tab)`
  background-color:white;
  text-align: center;
  width: 194px;
  height: 40px;
  border: 3px solid #FF9431;
  margin: -1.5px;
  user-select: none;
  cursor: pointer;

  &.is-selected {
    border-bottom: none;
  }

  &:focus {
    outline: none;
    border-bottom: none;
  }
`;
STab.tabsRole = 'Tab';

const STabPanel = styled(TabPanel)`
  background-color:white;
  text-align:center;
  display: none;
  width: 383px;
  height: 500px;
  border: 3px solid #FF9431;
  border-top: none;
  padding:10px 8px  20px 0;
  margin:-21px 0 0 -1px;
  border-radius: 0 0 20px 20px;

  &.is-selected {
    display: block;
  }
`;
STabPanel.tabsRole = 'TabPanel';

// 체크박스 둘러싸고 있는 박스
const StyledFieldset = styled.fieldset`
white-space: nowrap;
    width: 375px;
    display: flex;
    height: 110px;
    padding: 8px 17px 5px 17px;
    border: none;
    flex-wrap: wrap;
    font-weight:500;
`;

// 함수 구간
export default function Modal() {

  return (
    <STabs
      type="form"
      selectedTabClassName='is-selected'
      selectedTabPanelClassName='is-selected'
    >
      <STabList>
        <STab style={{ fontSize: '20px', borderRadius: '20px 0 0 0', lineHeight: '35px', fontWeight: 'bold' }}>매물정보</STab>
        <STab style={{ fontSize: '20px', borderRadius: '20px 0 0 0', lineHeight: '35px', fontWeight: 'bold' }}>편의시설</STab>
      </STabList>
      {/* 매물정보 구간 */}
      <STabPanel>
        <p style={{ fontWeight: 'bold', fontSize: '20px', paddingTop: '10px' }}>방종류</p>
        <GlobalStyles />
        <StyledFieldset>
          {roomKind.map((item) => (
            <MapCheckBox key={item.id} text={item.text} />
          ))}
        </StyledFieldset>
        <hr style={{ width: '90%' }} />
        <p style={{ fontWeight: 'bold', fontSize: '20px', marginBottom: '10px' }}>거래유형</p>
        <StyledFieldset style={{ height: '55px', paddingBottom: '5px', marginBottom: '5px' }} >
          {tradeType.map((item) => (
            <MapCheckBox key={item.id} text={item.text} />
          ))}
        </StyledFieldset>
        <hr style={{ width: '90%' }} />
        <p style={{ fontWeight: 'bold', fontSize: '20px' }}>가격</p>
        <MapMultiRangeSlider
          min={0}
          max={10000}
          onChange={({ min, max }) => console.log(min, max)}
        />
        <MapMultiRangeSlider
          min={0}
          max={10000}
          onChange={({ min, max }) => console.log(min, max)}
        />
      </STabPanel>
      {/* 편의시설 구간 */}
      <STabPanel style={{ textAlign: "left" }}>
        <p style={{ paddingLeft: '20px', paddingTop: '20px', paddingBottom: '20px', fontWeight: 'bold' }}>1.</p>
        <p style={{ paddingLeft: '20px', paddingBottom: '20px', fontWeight: 'bold' }}>2.</p>
        <p style={{ paddingLeft: '20px', paddingBottom: "40px", fontWeight: 'bold' }}>3.</p>
        <hr style={{ width: '90%' }} />
        <GlobalStyles />
        <StyledFieldset style={{ height: '300px', paddingTop: '10px', width: '375px' }}>
          {Options.map((item) => (
            <MapCheckBox key={item.id} text={item.text} />
          ))}
        </StyledFieldset>
      </STabPanel >

    </STabs >
  );
};