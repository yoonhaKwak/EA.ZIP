import React, { Component } from "react";
import ItemCard from "./ItemCard";
class Listpage extends Component {
  id = 1;
  state = {};
  render() {
    const { Itemcard } = this.props;
    return (
      <ul className="list__itemview">
        {Itemcard &&
          Itemcard.map((itemdata,) => {
            return (
              <ItemCard
              ImageUrl={itemdata.image_url}//이미지주소
              Category2={itemdata.category2}//카테고리2
              Name={itemdata.name}//매물명
              Feature={itemdata.ad}//특징광고내용
              Supply={itemdata.supply}//공급면적
              Dedicated={itemdata.exclusive}//전용면적
              Jeonse={itemdata.jeonse}//전세가
              Monthly={itemdata.monthly}//월세가
              Trading={itemdata.price}//매매가
              Selling={itemdata.type}//매물거래구분
              Room={itemdata.room_number}//방수
              Deposit={itemdata.deposit}//월세보증금
              SupplyP={itemdata.supply_pyeong}//공급면적평
              Addr2={itemdata.addr2}//신주소
              Addr1={itemdata.addr1}//구주소

              //이미지,특징광고내용,전세가,월세가,매매가,카테고리2,공급면적,
              //적용면적,매물거래구분(1:매매,2:전세,3:월세)

              />
            );
          })}
      </ul>
    );
  }
}
export default Listpage;