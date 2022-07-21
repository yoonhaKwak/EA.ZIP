import styled from "styled-components";
import pallette from "../../styles/pallette";
import React, { Component } from "react";
import axios from "axios";
import MyListPage from "../detail/MyListpage"

const Listblock = styled.div`
    position:flex;
    background-color:white;
    left:0;
    height:100%;
    width:100%;

    `;

class MyHomeList extends Component {
  // 제일 common한 state값 초기 셋팅
  state = {
    loading: false,
    ItemList: [] // 처음 Itemlist는 있는 상태로 기획 []
  };

  loadItem = async () => {
    // Json Data 불러오기
    axios // axios를 이용해
      .get("./Gangnam15.json") // json을 가져온다음
      .then(({ data }) => {
        console.log(data.data)// data라는 이름으로 json 파일에 있는 값에 state값을 바꿔준다.
        this.setState({
          loading: true, // load되었으니 true,
          ItemList: data // 비어있던 Itemlist는 data에 객체를 찾아넣어준다. ( Item : json파일에 있는 항목)
        });
      })
      .catch(e => {
        // json이 로드되지않은 시간엔
        console.error(e); // 에러표시
        this.setState({
          loading: false // 이때는 load 가 slfalse 유지
        });
      });
  };

  componentDidMount() {
    this.loadItem();
  }

  // APP.js 컴포넌트의 최종 보여지는 render값 정의
  render() {
    const { ItemList } = this.state;
    console.log(ItemList);
    return (
      <Listblock><MyListPage Itemcard={ItemList} /></Listblock>
    );
  }
}

export default MyHomeList;
